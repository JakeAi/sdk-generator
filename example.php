<?php

include_once 'vendor/autoload.php';

use Appwrite\SDK\Language\GraphQL;
use Appwrite\Spec\Swagger2;
use Appwrite\SDK\SDK;
use Appwrite\SDK\Language\Angular;
use Appwrite\SDK\Language\AngularCommon;
use Appwrite\SDK\Language\Web;
use Appwrite\SDK\Language\Node;
use Appwrite\SDK\Language\CLI;
use Appwrite\SDK\Language\PHP;
use Appwrite\SDK\Language\Python;
use Appwrite\SDK\Language\Ruby;
use Appwrite\SDK\Language\Dart;
use Appwrite\SDK\Language\Go;
use Appwrite\SDK\Language\Deno;
use Appwrite\SDK\Language\REST;
use Appwrite\SDK\Language\Swift;
use Appwrite\SDK\Language\Apple;
use Appwrite\SDK\Language\DotNet;
use Appwrite\SDK\Language\Flutter;
use Appwrite\SDK\Language\Android;
use Appwrite\SDK\Language\Kotlin;

try {
    function getSSLPage($url) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }
    // $spec = file_get_contents('./specs/swagger2-latest-client.json');
    $spec = getSSLPage("https://raw.githubusercontent.com/appwrite/appwrite/master/app/config/specs/swagger2-latest-client.json");

    if(empty($spec)) {
        throw new Exception('Failed to fetch spec from Appwrite server');
    }

    
    // Angular
    $sdk  = new SDK(new Angular(), new Swagger2($spec));

    $sdk
        ->setName('Angular')
        ->setDescription('Repo description goes here')
        ->setShortDescription('Repo short description goes here')
        ->setVersion('12.0.0')
        ->setPlatform('client')
        ->setURL('https://example.com')
        ->setLogo('https://appwrite.io/v1/images/console.png')
        ->setLicenseContent('test test test')
        ->setWarning('**WORK IN PROGRESS - NOT READY FOR USAGE**')
        ->setChangelog('**CHANGELOG**')
        ->setReadme("## Getting Started")
        ->setGitUserName('repoowner')
        ->setGitRepoName('reponame')
        ->setTwitter('appwrite_io')
        ->setDiscord('564160730845151244', 'https://appwrite.io/discord')
        ->setDefaultHeaders([
            'X-Appwrite-Response-Format' => '1.4.0',
        ])
    ;

    $sdk->generate(__DIR__ . '/examples/angular');
    // Angular Common
    $sdk  = new SDK(new AngularCommon(), new Swagger2(getSSLPage("https://raw.githubusercontent.com/appwrite/appwrite/master/app/config/specs/swagger2-latest-console.json")));

    $sdk
        ->setName('AngularCommon')
        ->setDescription('Repo description goes here')
        ->setShortDescription('Repo short description goes here')
        ->setVersion('0.0.0')
        ->setURL('https://example.com')
        ->setLogo('https://appwrite.io/v1/images/console.png')
        ->setLicenseContent('test test test')
        ->setWarning('**WORK IN PROGRESS - NOT READY FOR USAGE**')
        ->setChangelog('**CHANGELOG**')
        ->setReadme("## Getting Started")
        ->setGitUserName('repoowner')
        ->setGitRepoName('reponame')
        ->setTwitter('appwrite_io')
        ->setDiscord('564160730845151244', 'https://appwrite.io/discord')
        ->setDefaultHeaders([
            'X-Appwrite-Response-Format' => '1.2.0',
        ])
    ;

    $sdk->generate(__DIR__ . '/examples/angular-common');

}
catch (Exception $exception) {
    echo 'Error: ' . $exception->getMessage() . ' on ' . $exception->getFile() . ':' . $exception->getLine() . "\n";
}
catch (Throwable $exception) {
    echo 'Error: ' . $exception->getMessage() . ' on ' . $exception->getFile() . ':' . $exception->getLine() . "\n";
}

echo "Example SDKs generated successfully\n";
