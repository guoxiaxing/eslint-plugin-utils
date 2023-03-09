/**
 * @fileoverview typeof 不能用于对象或数字，请使用@jslib-book/type
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
      description: "typeof 不能用于对象或数字，请使用@jslib-book/type",
      recommended: false,
      category: 'Best Practices',
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      BinaryExpression: (node) => {
        const operator = node.operator;
        const left = node.left;
        const right = node.right;
        if ((operator === '==' || operator === '===') && left.type === 'UnaryExpression' && left.operator === 'typeof' && right.type === 'Literal' && right.value === 'object') {
          context.report({
            node,
            messageId: 'messageId'
          })
        }
      }
    };
  },
};
