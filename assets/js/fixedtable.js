function drawTable(){
$(document).ready(function() {
    $('#example').DataTable( {
        scrollY:        300,
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        fixedColumns:   true,
       
    } );

} );
}