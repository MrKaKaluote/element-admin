module.exports = {
  // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有   "root": true，它就会停止在父级目录中寻找。
  root: true,
  parserOptions: {
    // 对Babel解析器的包装使其与 ESLint 兼容。
    parser: 'babel-eslint',
    // 代码是 ECMAScript 模块
    sourceType: 'module'
  },
  env: {
     // 预定义的全局变量，这里是浏览器环境
    browser: true,
    node: true,
    es6: true,
  },
  // 扩展风格
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  // 规则的细节请到ESLint官方网站查看http://eslint.org/docs/rules/
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "no-import-assign" : 'off',
    "no-async-promise-executor": 'off',
    "no-dupe-else-if": 'off',
    "no-misleading-character-class": 'off',
    "no-async-promise-executor": 'off',
    "no-setter-return": 'off',
    "no-useless-catch": 'off',
    "vue/name-property-casing": ["error", "PascalCase"],
    // 定义对象的set存取器属性时，强制定义get
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 禁止或强制在单行代码块中使用空格
    'block-spacing': [2, 'always'],
    // 强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    // 双峰驼命名格式
    'camelcase': [0, {
      'properties': 'always'
    }],
    //  数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
    'comma-dangle': [2, 'never'],
    // 控制逗号前后的空格
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 控制逗号在行尾出现还是在行首出现 (默认行尾)
    'comma-style': [2, 'last'],
    // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
    'constructor-super': 2,
    // 强制所有控制语句使用一致的括号风格
    'curly': [2, 'multi-line'],
    // 强制object.key 中 . 的位置，参数:
    // property，'.'号应与属性在同一行
    // object, '.' 号应与对象名在同一行
    'dot-location': [2, 'property'],
    // 文件末尾强制换行
    'eol-last': 2,
    // 使用 === 替代 == allow-null允许null和undefined==
    "eqeqeq": [2, "allow-null"],
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 要求回调函数中有容错处理
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': [2, 'prefer-single'],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 要求构造函数首字母大写
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    // 要求调用无参构造函数时有圆括号
    'new-parens': 2,
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eq-null': 0,
    // 禁止使用 Array 构造函数
    'no-array-constructor': 2,
    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': 2,
    // 禁用 console
    'no-console': 0,
    // 禁止修改类声明的变量
    'no-class-assign': 2,
    // 禁止条件表达式中出现赋值操作符
    'no-cond-assign': 2,
    // 禁止修改 const 声明的变量
    'no-const-assign': 2,
    // 禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
    'no-control-regex': 0,
    // 禁止删除变量
    'no-delete-var': 2,
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    // 禁止类成员中出现重复的名称
    'no-dupe-class-members': 2,
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 2,
    // 禁止重复的 case 标签
    'no-duplicate-case': 2,
    // 禁止在正则表达式中使用空字符集 (/^abc[]/)
    'no-empty-character-class': 2,
    // 禁止使用空解构模式no-empty-pattern
    'no-empty-pattern': 2,
    // 禁用 eval()，由于多处地方使用，暂不开启
    'no-eval': 0,
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 2,
    // 禁止扩展原生类型
    'no-extend-native': 2,
    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 2,
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 2,
    // 禁止不必要的括号 //(a * b) + c;//报错
    'no-extra-parens': [2, 'functions'],
    // 禁止 case 语句落空
    'no-fallthrough': 2,
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 2,
    // 禁止对 function 声明重新赋值
    'no-func-assign': 2,
    // 禁止使用类似 eval() 的方法
    'no-implied-eval': 2,
    // 禁止在嵌套的块中出现 function 或 var 声明
    'no-inner-declarations': [2, 'functions'],
    // 禁止 RegExp 构造函数中无效的正则表达式字符串
    'no-invalid-regexp': 2,
    // 禁止在字符串和注释之外不规则的空白
    'no-irregular-whitespace': 2,
    // 禁用 __iterator__ 属性
    'no-iterator': 2,
    // 不允许标签与变量同名
    'no-label-var': 2,
    // 禁用标签语句
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    // 禁用不必要的嵌套块
    'no-lone-blocks': 2,
    // 不允许空格和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 2,
    // 禁止使用多个空格
    'no-multi-spaces': 2,
    // 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串
    'no-multi-str': 2,
    // 不允许多个空行
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    // 禁止对原生对象赋值
    'no-native-reassign': 2,
    // 禁止在 in 表达式中出现否定的左操作数
    'no-negated-in-lhs': 2,
    // 禁止使用 Object 的构造函数
    'no-new-object': 2,
    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 2,
    // 禁止 Symbol 的构造函数
    'no-new-symbol': 2,
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 2,
    // 禁止把全局对象 (Math 和 JSON) 作为函数调用 错误：var math = Math();
    'no-obj-calls': 2,
    // 禁用八进制字面量
    'no-octal': 2,
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 2,
    // 禁止对 __dirname 和 __filename进行字符串连接
    'no-path-concat': 2,
    // 禁用 __proto__ 属性
    'no-proto': 2,
    // 禁止使用 var 多次声明同一变量
    'no-redeclare': 2,
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 2,
    // 禁用指定的通过 require 加载的模块
    'no-return-assign': [2, 'except-parens'],
    // 禁止自我赋值
    'no-self-assign': 2,
    // 禁止自身比较
    'no-self-compare': 2,
    // 禁用逗号操作符
    'no-sequences': 2,
    // 禁止覆盖受限制的标识符
    'no-shadow-restricted-names': 2,
    // 禁止 function 标识符和括号之间出现空格
    'no-spaced-func': 2,
    // 禁用稀疏数组
    'no-sparse-arrays': 2,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-this-before-super': 2,
    // 禁止抛出非异常字面量
    'no-throw-literal': 0,
    // 禁用行尾空格
    'no-trailing-spaces': 2,
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 2,
    // 禁止将变量初始化为 undefined
    'no-undef-init': 2,
    // 禁止出现令人困惑的多行表达式
    'no-unexpected-multiline': 2,
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 2,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    // 禁止在return、throw、continue 和 break语句之后出现不可达代码
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    // 禁止出现未使用过的变量
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 2,
    // 禁止不必要的计算性能键对象的文字
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    // 禁用不必要的转义字符
    'no-useless-escape': 0,
    // 禁止属性前有空白
    'no-whitespace-before-property': 2,
    // 禁用 with 语句
    'no-with': 2,
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': [2, {
      'initialized': 'never'
    }],
    // 强制操作符使用一致的换行符
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    // 要求或禁止块内填充
    'padded-blocks': [2, 'never'],
    // 强制使用一致的反勾号、双引号或单引号
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    'semi': [2, 'never'],
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 强制在块之前使用一致的空格
    'space-before-blocks': [2, 'always'],
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [2, 'never'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': [2, 'never'],
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': [2, 'never'],
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 2,
    // typeof foo === "undefimed" 错误
    'valid-typeof': 2,
    // 要求 IIFE 使用括号括起来
    'wrap-iife': [2, 'any'],
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [2, 'both'],
    // 要求或禁止 “Yoda” 条件
    'yoda': [2, 'never'],
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 2,
    // 是否允许debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 强制在花括号中使用一致的空格
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [2, 'never']
  }
}
