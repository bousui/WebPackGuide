import jQuery from 'jquery'
const $ = jQuery;

export function jQueryMethod(id) {
    const text = $('#' + id).text();
    document.write('<br/>jQuery sample: Text is "' + text + '"');
}