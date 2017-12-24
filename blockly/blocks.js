var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['bugcan_setup'] = {
  init: function() {
    this.appendValueInput("bugcan")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_SET, "Setting")
        .appendField(new Blockly.FieldDropdown([["bugcan1","bugcan1"], ["bugcan2","bugcan2"], ["bugcan3","bugcan3"], ["bugcan4","bugcan4"], ["bugcan5","bugcan5"], ["bugcan6","bugcan6"]]), "bugcans")
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_PIN, "pins");
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
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_CHANNEL1, "channel1 pins")
        .appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]), "uno_Dpin1")
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_COMMA, ",")
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_CHANNEL2, "channel2 pins")
        .appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]), "uno_Dpin2")
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_COMMA, ",")
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_CHANNEL3, "channel3 pins")
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
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_SENCING,"sencing numbers of pests")
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_EVERY, ", every");
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_GET_TIME, "ms ( 1/1000 sec )");
    this.appendStatementInput("bugcan_sencing_go")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_DO, "do");
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
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_DETECTED, "The number of detected pests is")
        .appendField(new Blockly.FieldVariable("bugnum"), "bugnum")
        .appendField(Blockly.Msg.WEBDUINO_BUGCAN_BUGS, ".");
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};