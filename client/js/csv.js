$(document).ready(function () {
            function exportTableToCSV($table, filename) {
                console.log('export!!!');
                var $headers = $table.find('tr:has(th)')
                    ,$rows = $table.find('tr:has(td)')
                    ,tmpColDelim = String.fromCharCode(11) // vertical tab character
                    ,tmpRowDelim = String.fromCharCode(0)
                    ,colDelim = '","'
                    ,rowDelim = '"\r\n"';
                    var csv = '"';
                    csv += formatRows($headers.map(grabRow));
                    csv += rowDelim;
                    csv += formatRows($rows.map(grabRow)) + '"';
                    var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);
                $(this)
                    .attr({
                    'download': filename
                        ,'href': csvData
                });
                function formatRows(rows){
                    return rows.get().join(tmpRowDelim)
                        .split(tmpRowDelim).join(rowDelim)
                        .split(tmpColDelim).join(colDelim);
                }
                // Grab and format a row from the table
                function grabRow(i,row){

                    var $row = $(row);
                    //for some reason $cols = $row.find('td') || $row.find('th') won't work...
                    var $cols = $row.find('td');
                    if(!$cols.length) $cols = $row.find('th');
                    return $cols.map(grabCol)
                                .get().join(tmpColDelim);
                }
                // Grab and format a column from the table
                function grabCol(j,col){
                    var $col = $(col),
                        $text = $col.text();
                    return $text.replace('"', '""'); // escape double quotes
                }
            }
            // This must be a hyperlink
            $(".export-attendees").click(function (event) {
                // var outputFile = 'export'
                var outputFile = window.prompt("What do you want to name your output file (Note: This won't have any effect on Safari)") || 'export';
                outputFile = outputFile.replace('.csv','') + '.csv';

                // CSV
                exportTableToCSV.apply(this, [$('#attendeeData>table'), outputFile]);

                // IF CSV, don't do event.preventDefault() or return false
                // We actually need this to be a typical hyperlink
            });
        });



// $(document).ready(function () {
//     function exportTableToCSV($table, filename) {
//         var $rows = $table.find('tr:has(td)'),
//             tmpColDelim = String.fromCharCode(11), // vertical tab character
//             tmpRowDelim = String.fromCharCode(0), // null character

//             // actual delimiter characters for CSV format
//             colDelim = '","',
//             rowDelim = '"\r\n"',

//             // Grab text from table into CSV formatted string
//             csv = '"' + $rows.map(function (i, row) {
//                 var $row = $(row),
//                     $cols = $row.find('td');
//                 return $cols.map(function (j, col) {
//                     var $col = $(col),
//                         text = $col.text();
//                     return text.replace(/"/g, '""'); // escape double quotes
//                 }).get().join(tmpColDelim);
//             }).get().join(tmpRowDelim)
//                 .split(tmpRowDelim).join(rowDelim)
//                 .split(tmpColDelim).join(colDelim) + '"',
//             // Data URI
//             csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);
//         $(this)
//             .attr({
//             'download': filename,
//                 'href': csvData,
//                 'target': '_blank'
//         });
//     }

//     // Export Attendees Button
//     $(".export-attendees").on('click', function (event) {
//         exportTableToCSV.apply(this, [$('#attendeeData>table'), 'export-event-attendees.csv']);
//     });

//     // Export Events Button
//     $(".export-events").on('click', function (event) {
//         exportTableToCSV.apply(this, [$('#eventData>table'), 'export-events.csv']);
//     });
// });
