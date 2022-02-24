/** @odoo-module */
import {registry} from "@web/core/registry";

const rpc = require('web.rpc');

// TODO add error messages in the test
// TODO add hidden actions
// TODO show
function isRunbotStartTestRegistration() {


    return rpc.query({
        model: 'runbot.record',
        method: 'get_runbot_start_test',
        args: [],
    }).then(function (runbot_start_test) {
        return runbot_start_test;
    });

}

function runbotStartRegistration({env}) {
    // let hidden = await isRunbotStartTestRegistration()
    return {
        type: "item",
        description: env._t("Start Test"),

        callback: () => {
            rpc.query({
                model: 'runbot.record',
                method: 'open_registration',
                context: {'default_record_type': 'test'},
            }).then(function (act) {
                env.services.action.doAction(act)
                // _this.runbot_start_test = true;
                // is_runbot_start_test_registration_variable = true
                // _this.update();
            });
        },
        // hidden: hidden ,
        sequence: 310,
    };

}

function runbotStopRegistration({env}) {
    // let hidden = await isRunbotStartTestRegistration()
    return {
        type: "item",
        description: env._t("Stop Test"),

        callback: () => {
            rpc.query({
                model: 'runbot.record',
                method: 'stop_registration',
                // context: {'default_record_type': 'demo'},
            });
        },
        hidden: false,
        sequence: 311,
    };

}

function runbotMakeTodoTest({env}) {
    // let hidden = await isRunbotStartTestRegistration()
    return {
        type: "item",
        description: env._t("Check to make"),
        // href: runTestsURL,
        callback: () => {
            rpc.query({
                model: 'runbot.record',
                method: 'make_todo_test',
                context: {},
            }).then(function (act) {
                env.services.action.doAction(act)
            });
        },
        // hidden: !hidden,
        sequence: 312,
    };
}

function runbotStartDemoRegistration({env}) {
    // let hidden = await isRunbotStartTestRegistration()
    return {
        type: "item",
        description: env._t("Start Demo"),
        callback: () => {
            rpc.query({
                model: 'runbot.record',
                method: 'open_registration',
                context: {'default_record_type': 'demo'},
            }).then(function (act) {
                env.services.action.doAction(act)
            });
        },
        // hidden: hidden,
        sequence: 313,
    };

}

function runbotActionSeparator({env}) {


    return {
        type: "separator",
        sequence: 300,
    };
}


registry.category('debug').category('action')
    .add('runbotActionSeparator', runbotActionSeparator)
    .add('runbotStartRegistration', runbotStartRegistration)
    .add('runbotStopRegistration', runbotStopRegistration)
    .add('runbotMakeTodoTest', runbotMakeTodoTest)
// .add('runbotStartDemoRegistration', runbotStartDemoRegistration);
