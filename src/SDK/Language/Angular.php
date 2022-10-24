<?php

namespace Appwrite\SDK\Language;

use Twig\TwigFilter;


class Angular extends JS
{

    /**
     * @return string
     */
    public function getName(): string
    {
        return 'Angular';
    }

    /**
     * @return array
     */
    public function getFiles(): array
    {
        $folder = 'angular';
        return [
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/exceptions/appwrite.exception.ts',
                'template'      => $folder . '/src/lib/exceptions/appwrite.exception.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/exceptions/index.ts',
                'template'      => $folder . '/src/lib/exceptions/index.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'service',
                'destination'   => 'src/lib/services/appwrite-{{service.name | caseDash}}.service.ts',
                'template'      => $folder . '/src/lib/services/template.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/tokens/appwrite-local-storage-provider.token.ts',
                'template'      => $folder . '/src/lib/tokens/appwrite-local-storage-provider.token.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/tokens/appwrite-location-provider.token.ts',
                'template'      => $folder . '/src/lib/tokens/appwrite-location-provider.token.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/tokens/appwrite-options.token.ts',
                'template'      => $folder . '/src/lib/tokens/appwrite-options.token.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/tokens/index.ts',
                'template'      => $folder . '/src/lib/tokens/index.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/types/index.ts',
                'template'      => $folder . '/src/lib/types/index.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/util/flatten.ts',
                'template'      => $folder . '/src/lib/util/flatten.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/util/index.ts',
                'template'      => $folder . '/src/lib/util/index.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/index.ts',
                'template'      => $folder . '/src/index.ts.twig',
                'minify'        => false,
            ],


            [
                'scope'         => 'default',
                'destination'   => 'src/lib/services/appwrite.service.ts',
                'template'      => $folder . '/src/lib/services/appwrite.service.ts.twig',
                'minify'        => false,
            ],

            [
                'scope'         => 'models',
                'destination'   => 'src/lib/types/{{definition.name}}.ts',
                'template'      => $folder . '/src/lib/types/models.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/permission.ts',
                'template'      => $folder . '/src/lib/permission.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/role.ts',
                'template'      => $folder . '/src/lib/role.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/id.ts',
                'template'      => $folder . '/src/lib/id.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'src/lib/query.ts',
                'template'      => $folder . '/src/lib/query.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => '.eslintrc.json',
                'template'      => $folder . '/.eslintrc.json.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'jest.config.ts',
                'template'      => $folder . '/jest.config.ts.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'ng-package.json',
                'template'      => $folder . '/ng-package.json.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'package.json',
                'template'      => $folder . '/package.json.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'project.json',
                'template'      => $folder . '/project.json.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'README.md',
                'template'      => $folder . '/README.md.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'tsconfig.json',
                'template'      => $folder . '/tsconfig.json.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'tsconfig.lib.json',
                'template'      => $folder . '/tsconfig.lib.json.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'tsconfig.lib.prod.json',
                'template'      => $folder . '/tsconfig.lib.prod.json.twig',
                'minify'        => false,
            ],
            [
                'scope'         => 'default',
                'destination'   => 'tsconfig.spec.json',
                'template'      => $folder . '/tsconfig.spec.json.twig',
                'minify'        => false,
            ],

        ];
    }

    /**
     * @param array $param
     * @return string
     */
    public function getParamExample(array $param): string
    {
        $type       = $param['type'] ?? '';
        $example    = $param['example'] ?? '';

        $output = '';

        if (empty($example) && $example !== 0 && $example !== false) {
            switch ($type) {
                case self::TYPE_NUMBER:
                case self::TYPE_INTEGER:
                case self::TYPE_BOOLEAN:
                    $output .= 'null';
                    break;
                case self::TYPE_STRING:
                    $output .= "''";
                    break;
                case self::TYPE_ARRAY:
                    $output .= '[]';
                    break;
                case self::TYPE_OBJECT:
                    $output .= '{}';
                    break;
                case self::TYPE_FILE:
                    $output .= "document.getElementById('uploader').files[0]";
                    break;
            }
        } else {
            switch ($type) {
                case self::TYPE_NUMBER:
                case self::TYPE_INTEGER:
                case self::TYPE_ARRAY:
                case self::TYPE_OBJECT:
                    $output .= $example;
                    break;
                case self::TYPE_BOOLEAN:
                    $output .= ($example) ? 'true' : 'false';
                    break;
                case self::TYPE_STRING:
                    $output .= "'{$example}'";
                    break;
                case self::TYPE_FILE:
                    $output .= "document.getElementById('uploader').files[0]";
                    break;
            }
        }

        return $output;
    }

    public function getTypeName(array $parameter, array $method = []): string
    {
        switch ($parameter['type']) {
            case self::TYPE_INTEGER:
            case self::TYPE_NUMBER:
                return 'number';
            case self::TYPE_ARRAY:
                if (!empty($parameter['array']['type'])) {
                    return $this->getTypeName($parameter['array']) . '[]';
                }
                return 'string[]';
            case self::TYPE_FILE:
                return 'File';
            case self::TYPE_OBJECT:
                if (empty($method)) {
                    return $parameter['type'];
                }
                switch ($method['responseModel']) {
                    case 'user':
                        return "Partial<Preferences>";
                    case 'document':
                        if ($method['method'] === 'post') {
                            return "Omit<R, keyof Document>";
                        }
                        if ($method['method'] === 'patch') {
                            return "Partial<Omit<R, keyof Document>>";
                        }
                }
        }

        return $parameter['type'];
    }

    protected function populateGenerics(string $model, array $spec, array &$generics, bool $skipFirst = false)
    {
        if (!$skipFirst && $spec['definitions'][$model]['additionalProperties']) {
            $generics[] = $this->toUpperCase($model);
        }

        $properties = $spec['definitions'][$model]['properties'];
        foreach ($properties as $property) {
            if (array_key_exists('sub_schema', $property) && $property['sub_schema']) {
                $this->populateGenerics($property['sub_schema'], $spec, $generics, false);
            }
        }
    }

    public function getGenerics(string $model, array $spec, bool $skipFirst = false): string
    {
        $generics = [];

        if (array_key_exists($model, $spec['definitions'])) {
            $this->populateGenerics($model, $spec, $generics, $skipFirst);
        }

        if (empty($generics)) return '';
        $generics = array_unique($generics);

        $generics = array_map(function ($type) {
            if ($type === 'Document') {
                return 'R';
            }
            return "{$type} extends {$type}";
        }, $generics);
        return '<' . implode(', ', $generics) . '>';
    }

    public function getReturn(array $method, array $spec): string
    {
        if ($method['type'] === 'webAuth') {
            return 'void | URLParse';
        } elseif ($method['type'] === 'location') {
            return 'URLParse';
        }

        if (array_key_exists('responseModel', $method) && !empty($method['responseModel']) && $method['responseModel'] !== 'any') {
            $ret = '';
            if (
                array_key_exists($method['responseModel'], $spec['definitions']) &&
                array_key_exists('additionalProperties', $spec['definitions'][$method['responseModel']]) &&
                !$spec['definitions'][$method['responseModel']]['additionalProperties']
            ) {
                $ret .= '';
            }

            $ret .= $this->toUpperCase($method['responseModel']);

            $models = [];

            if ($method['responseModel']) {
                $this->populateGenerics($method['responseModel'], $spec, $models);
            }

            $models = array_unique($models);
            $models = array_filter($models, fn ($model) => $model != $this->toUpperCase($method['responseModel']));
            $models = array_map(function ($type) {
                if ($type === 'Document') {
                    return 'R';
                }
            }, $models);

            if (!empty($models)) {
                $ret .= '<' . implode(', ', $models) . '>';
            }

            $ret .= '';

            return $ret;
        } else {
            return 'Record<string, unknown>';
        }

        return "";
    }

    public function toUpperCase(string $value): string
    {
        return ucfirst((string)$this->helperCamelCase($value));
    }

    protected function helperCamelCase($str)
    {
        $str = preg_replace('/[^a-z0-9' . implode("", []) . ']+/i', ' ', $str);
        $str = trim($str);
        $str = ucwords($str);
        $str = str_replace(" ", "", $str);
        $str = lcfirst($str);

        return $str;
    }

    public function getSubSchema(array $property, array $spec): string
    {
        if (array_key_exists('sub_schema', $property)) {
            $ret = '';
            $generics = [];
            $this->populateGenerics($property['sub_schema'], $spec, $generics);

            $generics = array_filter($generics, fn ($model) => $model != $this->toUpperCase($property['sub_schema']));

            $ret .= $this->toUpperCase($property['sub_schema']);
            if (!empty($generics)) {
                $ret .= '<' . implode(', ', $generics) . '>';
            }
            if ($property['type'] === 'array') {
                $ret .= '[]';
            }

            return $ret;
        }

        return $this->getTypeName($property);
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('getPropertyType', function ($value, $method = []) {
                return $this->getTypeName($value, $method);
            }),
            new TwigFilter('getSubSchema', function (array $property, array $spec) {
                return $this->getSubSchema($property, $spec);
            }),
            new TwigFilter('getGenerics', function (string $model, array $spec, bool $skipAdditional = false) {
                return $this->getGenerics($model, $spec, $skipAdditional);
            }),
            new TwigFilter('getReturn', function (array $method, array $spec) {
                return $this->getReturn($method, $spec);
            }),
            new TwigFilter('comment2', function ($value) {
                $value = explode("\n", $value);
                foreach ($value as $key => $line) {
                    $value[$key] = "     * " . wordwrap($value[$key], 75, "\n     * ");
                }
                return implode("\n", $value);
            }, ['is_safe' => ['html']]),
            new TwigFilter('comment3', function ($value) {
                $value = explode("\n", $value);
                foreach ($value as $key => $line) {
                    $value[$key] = "         * " . wordwrap($value[$key], 75, "\n         * ");
                }
                return implode("\n", $value);
            }, ['is_safe' => ['html']]),
        ];
    }
}
