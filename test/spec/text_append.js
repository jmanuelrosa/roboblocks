/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.text_append block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'text_append');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'int item;\n\nvoid setup()\n{\n\n}\n\n\nvoid loop()\n{\n  item2 = new StringBuffer(item2).add(\'\').toString();\n\n}');
			});
		});
	});

}).call( this );
