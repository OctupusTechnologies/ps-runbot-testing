/** @odoo-module */
import {registry} from "@web/core/registry";

const rpc = require('web.rpc');

// TODO add error messages in the test
function isRunbotStartTestRegistration() {


    return rpc.query({
        model: 'runbot.record',
        method: 'get_runbot_start_test',
        args: [],
    }).then(function (runbot_start_test) {
        return runbot_start_test;
    });

}

async function runbotStartRegistration({env}) {

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
        hidden: await isRunbotStartTestRegistration(),
        sequence: 310,
    };

}

async function runbotStopRegistration({env}) {

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
        hidden: await !isRunbotStartTestRegistration(),
        sequence: 311,
    };

}

async function runbotMakeTodoTest({env}) {
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
        hidden: await !isRunbotStartTestRegistration(),
        sequence: 312,
    };
}


function runbotActionSeparator({env}) {


    return {
        type: "separator",
        sequence: 300,
    };
}
async function runbotStartDemoRegistration({env}) {
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
        hidden: await isRunbotStartTestRegistration(),
        sequence: 313,
    };

}

registry.category('debug').category('action')
    .add('runbotActionSeparator', runbotActionSeparator)
    .add('runbotStartRegistration', runbotStartRegistration)
    .add('runbotStopRegistration', runbotStopRegistration)
    .add('runbotMakeTodoTest', runbotMakeTodoTest)
    .add('runbotStartDemoRegistration', runbotStartDemoRegistration);
