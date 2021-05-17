    <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-database.js"></script>
<script src="FileSaver.min.js"></script>
<script src="tableexport.min.js"></script>

<script>    
 document.getElementById('export').onclick=function(){
        var tableId= document.getElementById('tabless').id;
        htmlTableToExcel(tableId, filename = '');
    }
   var htmlTableToExcel= function(tableId, fileName = ''){
    var excelFileName='excel_table_data';
    var TableDataType = 'application/vnd.ms-excel';
    var selectTable = document.getElementById(tableId);
    var htmlTable = selectTable.outerHTML.replace(/ /g, '%20');
    
    filename = filename?filename+'.xls':excelFileName+'.xls';
    var excelFileURL = document.createElement("a");
    document.body.appendChild(excelFileURL);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', htmlTable], {
            type: TableDataType
        });
        navigator.msSaveOrOpenBlob( blob, fileName);
    }else{
        
        excelFileURL.href = 'data:' + TableDataType + ', ' + htmlTable;
        excelFileURL.download = fileName;
        excelFileURL.click();
    }
}
</script>
<script src="firebase.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

<script>
 if (!navigator.serviceWorker.controller) {
     navigator.serviceWorker.register("sw.js").then(function(reg) {
         console.log("Service worker has been registered for scope: " + reg.scope);
     });
 }
</script>

</body>
</html>