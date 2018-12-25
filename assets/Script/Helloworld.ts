import {JsonConfig,ConfigType} from './JsonConfig'
const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = '1';

    onLoad() {
        console.log(this.text);
        console.log(this.label);
    }

    start () {
        // init logic
        this.text = JsonConfig.getItem(ConfigType.StaffExp,1).desc;
        this.label.string = this.text;
    }
}
