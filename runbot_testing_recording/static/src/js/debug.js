import { registry } from "@web/core/registry";
import { browser } from "@web/core/browser/browser";

import dialogs from "web.view_dialogs";
import { ComponentAdapter } from "web.OwlCompatibility";

function runbotStartDemoRegistration() {
    return {
        type: "item",
        description: env._t("Start Test"),
        // href: runTestsURL,
        callback: () => {
            console.log("test")
        },
        sequence: 10,
    };
    // var _this = this;
    // rpc.query({
    //     model: 'runbot.record',
    //     method: 'open_registration',
    //     context: {'default_record_type': 'demo'},
    // }).then(function(act) {
    //     _this.do_action(act);
    //     _this.runbot_start_demo = true;
    //     _this.update();
    // });
}
registry.category('debug').category('default').add('runbotStartDemoRegistration',runbotStartDemoRegistration)