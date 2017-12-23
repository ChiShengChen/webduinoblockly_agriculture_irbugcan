var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['bugcan_setup'] = {
  init: function() {
    this.appendValueInput("bugcan")
        .setCheck(null)
        .appendField("設定")
        .appendField(new Blockly.FieldDropdown([["bugcan1","bugcan1"], ["bugcan2","bugcan2"], ["bugcan3","bugcan3"], ["bugcan4","bugcan4"], ["bugcan5","bugcan5"], ["bugcan6","bugcan6"]]), "bugcans")
        .appendField("腳位為");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['bugcan_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("通道1腳位為")
        .appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]), "uno_Dpin1")
        .appendField("，")
        .appendField("通道2腳位為")
        .appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]), "uno_Dpin2")
        .appendField("，")
        .appendField("通道3腳位為")
        .appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]), "uno_Dpin3");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['bugcan_sencing'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["bugcan1","bugcan1"], ["bugcan2","bugcan2"], ["bugcan3","bugcan3"], ["bugcan4","bugcan4"], ["bugcan5","bugcan5"], ["bugcan6","bugcan6"]]), "bugcans")
        .appendField("偵測害蟲數量")
        .appendField("，每");
    this.appendDummyInput()
        .appendField("毫(1/1000)秒偵測一次");
    this.appendStatementInput("bugcan_sencing_go")
        .setCheck(null)
        .appendField("執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['bugcan_datadisplay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["bugcan1","bugcan1"], ["bugcan2","bugcan2"], ["bugcan3","bugcan3"], ["bugcan4","bugcan4"], ["bugcan5","bugcan5"], ["bugcan6","bugcan6"]]), "bugcans")
        .appendField("所測得目前的害蟲數量為")
        .appendField(new Blockly.FieldVariable("bugnum"), "bugnum")
        .appendField("隻");
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};