// Open file dialog to select PSD files
var files = File.openDialog("Select PSD files to save as PDFs", "*.psd", true);

// Loop through selected files
for (var i = 0; i < files.length; i++) {
    // Open file
    var doc = open(files[i]);

    // Get name for new file
    var newFileName = files[i].name.replace(".psd", ".pdf");

    // Save file as pdf in same location
    var savePath = files[i].path + "/" + newFileName;
    var pdfOptions = new PDFSaveOptions();
    doc.saveAs(new File(savePath), pdfOptions, true);

    // Close file
    doc.close();
}
