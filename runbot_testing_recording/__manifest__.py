# -*- coding: utf-8 -*-
{
    'name': "Runbot record testing",
    'description': """
    Register any actions set in the interface to generate automated tests by a functional teams
    """,
    'category': '',
    'version': '0.4',

    'depends': [
        'base',
        'web',
    ],

    'data': [
        'security/ir.model.access.csv',
        'views/record.xml',
        'wizards/test_start.xml',
        'wizards/caught_error.xml',
        # 'templates/templates.xml',
    ],
    'demo': [
    ],
    'qweb': [
        # 'static/src/xml/template.xml'
    ],
    'assets': {
        'web.assets_backend': [
            'runbot_testing_recording/static/src/js/debug.js',
            # 'helpdesk/static/src/css/portal_helpdesk.css',
            # 'helpdesk/static/src/js/helpdesk_dashboard.js',
            # 'helpdesk/static/src/js/tours/helpdesk.js',
        ]
    },
    'auto_install' : False,
}
