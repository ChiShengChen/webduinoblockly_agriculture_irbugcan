Blockly.JavaScript['bugcan_setup'] = function(block) {
  var dropdown_bugcans = block.getFieldValue('bugcans');
  var value_bugcan = Blockly.JavaScript.valueToCode(block, 'bugcan', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bugcan_pin'] = function(block) {
  var dropdown_uno_dpin1 = block.getFieldValue('uno_Dpin1');
  var dropdown_uno_dpin2 = block.getFieldValue('uno_Dpin2');
  var dropdown_uno_dpin3 = block.getFieldValue('uno_Dpin3');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bugcan_sencing'] = function(block) {
  var dropdown_bugcans = block.getFieldValue('bugcans');
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_bugcan_sencing_go = Blockly.JavaScript.statementToCode(block, 'bugcan_sencing_go');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bugcan_datadisplay'] = function(block) {
  var dropdown_bugcans = block.getFieldValue('bugcans');
  var variable_bugnum = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('bugnum'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};