/**
 * @fileoverview instanceof操作符可能存在问题，请使用@js-book/type
 * @author jslib-book
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    messages: {
      messageId: 'typeof 不能用于对象和数组，请使用 @js-book/type',
    },
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "instanceof操作符可能存在问题，请使用@js-book/type",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {

    function check(node) {
      const operator = node.operator;
      if (operator === 'instanceof') {
        context.report({
          node,
          messageId: 'messageId'
        })
      }
    }

    return {
      BinaryExpression: check
    };
  },
};
