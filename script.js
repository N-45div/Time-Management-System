function generatePDF(){
    const element = document.querySelector("#LeaveApp");

    html2pdf()
    .from(element)
    .save();
}