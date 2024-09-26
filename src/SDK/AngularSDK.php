<?php

namespace Appwrite\SDK;

use Exception;
use Appwrite\Spec\Spec;
use Throwable;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use Twig\Extension\DebugExtension;
use Twig\Loader\FilesystemLoader;
use Twig\TemplateWrapper;
use Twig\TwigFilter;
use MatthiasMullie\Minify;
use Twig_Error_Loader;
use Twig_Error_Runtime;
use Twig_Error_Syntax;

class AngularSDK extends SDK
{


    /**
     * AngularSDK constructor.
     *
     * @param Language $language
     * @param Spec $spec
     */
    public function __construct(Language $language, Spec $spec)
    {
        // Call the parent SDK constructor
        parent::__construct($language, $spec);

        // Additional initialization if needed
    }


    public function rrmdir($dir)
    {
        if (is_dir($dir)) {
            $objects = scandir($dir);
            foreach ($objects as $object) {
                if ($object != "." && $object != "..") {
                    if (filetype($dir . "/" . $object) == "dir")
                        $this->rrmdir($dir . "/" . $object);
                    else unlink($dir . "/" . $object);
                }
            }
            reset($objects);
            rmdir($dir);
        }
    }

    /**
     * @param string $target
     * @throws Throwable
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function generate(string $target): void
    {
        $this->rrmdir($target);

        $params = [
            'spec' => [
                'title' => $this->spec->getTitle(),
                'description' => $this->spec->getDescription(),
                'namespace' => $this->spec->getNamespace(),
                'version' => $this->spec->getVersion(),
                'endpoint' => $this->spec->getEndpoint(),
                'host' => parse_url($this->spec->getEndpoint(), PHP_URL_HOST),
                'basePath' => $this->spec->getAttribute('basePath', ''),
                'licenseName' => $this->spec->getLicenseName(),
                'licenseURL' => $this->spec->getLicenseURL(),
                'contactName' => $this->spec->getContactName(),
                'contactURL' => $this->spec->getContactURL(),
                'contactEmail' => $this->spec->getContactEmail(),
                'services' => $this->spec->getServices(),
                'enums' => $this->spec->getEnums(),
                'definitions' => $this->spec->getDefinitions(),
                'global' => [
                    'headers' => $this->spec->getGlobalHeaders(),
                    'defaultHeaders' => $this->defaultHeaders,
                ],
            ],
            'language' => [
                'name' => $this->language->getName(),
                'params' => $this->language->getParams(),
            ],
            'sdk' => $this->getParams(),
        ];

        foreach ($this->language->getFiles() as $file) {
            if ($file['scope'] != 'copy') {
                $template = $this->twig->load($file['template']); /* @var $template TemplateWrapper */
            }
            $destination    = $target . '/' . $file['destination'];
            $block          = $file['block'] ?? null;
            $minify         = $file['minify'] ?? false;

            switch ($file['scope']) {
                case 'default':
                    $this->render($template, $destination, $block, $params, $minify);
                    break;
                case 'copy':
                    if (!file_exists(dirname($destination))) {
                        mkdir(dirname($destination), 0777, true);
                    }
                    copy(realpath(__DIR__ . '/../../templates/' . $file['template']), $destination);
                    break;
                case 'service':
                    foreach ($this->spec->getServices() as $key => $service) {
                        $methods = $this->spec->getMethods($key);
                        $params['service'] = [
                            'globalParams' => $service['globalParams'] ?? [],
                            'description' => $service['description'] ?? '',
                            'name' => $key,
                            'features' => [
                                'upload' => $this->hasUploads($methods),
                                'location' => $this->hasLocation($methods),
                                'webAuth' => $this->hasWebAuth($methods),
                            ],
                            'methods' => $methods,
                        ];

                        if ($this->exclude($file, $params)) {
                            continue;
                        }

                        $this->render($template, $destination, $block, $params, $minify);
                    }
                    break;
                case 'models':
                    foreach ($this->spec->getDefinitions() as $key => $definition) {
                        $params['definition'] = $definition;

                        $this->render($template, $destination, $block, $params, $minify);
                    }

                case 'definition':
                    foreach ($this->spec->getDefinitions() as $key => $definition) {
                        $params['definition'] = $definition;

                        if ($this->exclude($file, $params)) {
                            continue;
                        }

                        $this->render($template, $destination, $block, $params, $minify);
                    }
                    break;
                case 'method':
                    foreach ($this->spec->getServices() as $key => $service) {
                        $methods = $this->spec->getMethods($key);
                        $params['service'] = [
                            'name' => $key,
                            'methods' => $methods,
                            'globalParams' => $service['globalParams'] ?? [],
                            'features' => [
                                'upload' => $this->hasUploads($methods),
                                'location' => $this->hasLocation($methods),
                                'webAuth' => $this->hasWebAuth($methods),
                            ],
                        ];

                        foreach ($methods as $method) {
                            $params['method'] = $method;

                            if ($this->exclude($file, $params)) {
                                continue;
                            }

                            $this->render($template, $destination, $block, $params, $minify);
                        }
                    }
                    break;
                case 'enum':
                    foreach ($this->spec->getEnums() as $key => $enum) {
                        $params['enum'] = $enum;

                        $this->render($template, $destination, $block, $params, $minify);
                    }
                    break;
            }
        }
    }
}
