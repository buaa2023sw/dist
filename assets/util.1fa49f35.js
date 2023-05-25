const t={trim(e){return e.replace(/^\s*(.*?)\s*$/g,"$1")},getFilterArray(e){return[...new Set(e)]},processTime(e){return e=e.replace("T"," "),e=e.substr(0,e.length-4),e}};export{t as u};
