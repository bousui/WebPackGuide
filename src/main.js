// メインモジュールのテスト
document.write('Main module sample.');

// サブモジュールのテスト
import {subMethod} from './sub-module'
subMethod();

// jQueryモジュールのテスト
import {jQueryMethod} from './jquery-module'
jQueryMethod('htmlSample');

// Babelモジュールのテスト
import {babelMethod} from './babel-module'
babelMethod();

// TypeScriptモジュールのテスト
import {typeScriptMethod} from './typescript-module'
typeScriptMethod('Main module.');