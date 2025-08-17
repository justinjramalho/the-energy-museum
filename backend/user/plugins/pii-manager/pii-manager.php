<?php
namespace Grav\Plugin;

use Grav\Common\Plugin;

/**
 * PII Manager Plugin - Simple Version
 */
class PIIManagerPlugin extends Plugin
{
    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0]
        ];
    }

    public function onPluginsInitialized()
    {
        if ($this->isAdmin()) {
            $this->enable([
                'onAdminMenu' => ['onAdminMenu', 0]
            ]);
        }
    }

    public function onAdminMenu()
    {
        $this->grav['twig']->plugins_hooked_nav['PII Manager'] = [
            'route' => 'pii-manager',
            'icon' => 'fa-users'
        ];
    }
}
?>