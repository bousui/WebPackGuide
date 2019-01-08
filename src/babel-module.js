export function babelMethod() {
    // アロー関数は、IE11ではBabelを挟まないと動作しない
    let arrowMethod = () => 'Babel sample.';
    document.write('<br/>' + arrowMethod());
}