(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./app/app.element.scss":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/WebstormProjects/css-oneline-layout/node_modules/postcss-loader/src??embedded!/home/ubuntu/WebstormProjects/css-oneline-layout/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-2!./app/app.element.scss ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: sans-serif;\n  display: grid;\n  row-gap: 5rem;\n  justify-items: center;\n  text-align: center;\n}\n\n.example--1 .parent {\n  display: grid;\n  place-items: center;\n  background: lightblue;\n  width: 500px;\n  height: 500px;\n  resize: both;\n  overflow: auto;\n}\n\n.example--1 .child {\n  padding: 0.5rem;\n  border-radius: 10px;\n  border: 1px solid red;\n  background: lightpink;\n  font-size: 2rem;\n  text-align: center;\n  width: 50%;\n}\n\n.example--2 .parent {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: lightblue;\n  width: 500px;\n  height: 500px;\n  overflow: auto;\n  resize: both;\n}\n\n.example--2 .child {\n  flex: 0 1 300px;\n  border: 1px dashed red;\n  background: lightpink;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.example--3 .parent {\n  display: grid;\n  grid-template-columns: minmax(150px, 25%) 1fr;\n  background: lightblue;\n  width: 500px;\n  height: 500px;\n  resize: both;\n  overflow: auto;\n}\n\n.example--3 .sidebar {\n  height: 100%;\n  background: lightpink;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.example--3 .content {\n  padding: 2rem;\n}\n\n.example--4 .parent {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  background: lightblue;\n  width: 500px;\n  height: 500px;\n  resize: both;\n  overflow: auto;\n}\n\n.example--4 header {\n  background: lightpink;\n  padding: 2rem;\n}\n\n.example--4 main {\n  background: coral;\n  padding: 2rem;\n}\n\n.example--4 footer {\n  background: wheat;\n  padding: 2rem;\n  text-align: center;\n}\n\n.example--5 .parent {\n  display: grid;\n  grid-template: auto 1fr auto/auto 1fr auto;\n  background: lightblue;\n  width: 500px;\n  height: 500px;\n  resize: both;\n  overflow: auto;\n}\n\n.example--5 header {\n  background: lightpink;\n  padding: 2rem;\n  grid-column: 1/4;\n}\n\n.example--5 .left-sidebar {\n  background: lightblue;\n  grid-column: 1/2;\n}\n\n.example--5 main {\n  background: coral;\n  grid-column: 2/3;\n}\n\n.example--5 .right-sidebar {\n  background: yellow;\n  grid-column: 3/4;\n}\n\n.example--5 footer {\n  background: wheat;\n  padding: 2rem;\n  text-align: center;\n  grid-column: 1/4;\n}\n\n.example--5 .left-sidebar,\n.example--5 .right-sidebar {\n  padding: 1rem;\n}\n\n.example--6 .parent {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  background: grey;\n  width: 500px;\n  height: 500px;\n  resize: both;\n  overflow: auto;\n}\n\n.example--6 .span-12 {\n  background: lightpink;\n  grid-column: 1/13;\n}\n\n.example--6 .span-6 {\n  background: lightblue;\n  grid-column: 1/7;\n}\n\n.example--6 .span-4 {\n  background: coral;\n  grid-column: 4/9;\n}\n\n.example--6 .span-2 {\n  background: yellow;\n  grid-column: 3/5;\n}\n\n.example--6 .span-7 {\n  background: #bce368;\n  grid-row: 3/6;\n  grid-column: 11/-1;\n}\n\n.example--7 .parent {\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  background: gray;\n  width: 600px;\n  height: 600px;\n  resize: both;\n  overflow: auto;\n  padding: 1rem;\n}\n\n.example--7 .parent div {\n  border-radius: 5px;\n}\n\n.example--7 div {\n  display: grid;\n}\n\n.example--7 .div {\n  display: grid;\n}\n\n.example--7 .div--1 {\n  background-color: lightyellow;\n}\n\n.example--7 .div--2 {\n  background-color: lightcoral;\n}\n\n.example--7 .div--3 {\n  background-color: lightblue;\n}\n\n.example--7 .div--4 {\n  background-color: lightgreen;\n}\n\n.example--8 .parent {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1rem;\n  background-color: lightblue;\n  width: 800px;\n  height: 500px;\n  overflow: auto;\n  resize: both;\n}\n\n.example--8 .visual {\n  height: 100px;\n  width: 100%;\n  background: wheat;\n  margin: 0.5rem 0;\n}\n\n.example--8 .card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: lightpink;\n  padding: 1rem;\n}\n\n.example--8 h1 {\n  font-size: 1.5rem;\n}\n\n.example--9 .parent {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: lightblue;\n  width: 500px;\n  height: 500px;\n  overflow: auto;\n  resize: both;\n}\n\n.example--9 .visual {\n  height: 100px;\n  width: 100%;\n  background: wheat;\n  margin: 0.5rem 0;\n}\n\n.example--9 .card {\n  width: clamp(23ch, 50%, 46ch);\n  display: flex;\n  flex-direction: column;\n  background: lightpink;\n  padding: 1rem;\n}\n\n.example--9 h1 {\n  font-size: 1.5rem;\n}\n\n.example--10 .parent {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: lightblue;\n  width: 500px;\n  height: 500px;\n  overflow: auto;\n  resize: both;\n}\n\n.example--10 .visual {\n  aspect-ratio: 16/9;\n  background: red;\n  margin: 0.5rem 0;\n}\n\n.example--10 .card {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  background: lightpink;\n  padding: 1rem;\n}\n\n.example--10 h1 {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9XZWJzdG9ybVByb2plY3RzL2Nzcy1vbmVsaW5lLWxheW91dC9hcHBzL2Nzcy1vbmVsaW5lLWxheW91dC9zcmMvYXBwL19iYXNlLnNjc3MiLCJhcHBzL2Nzcy1vbmVsaW5lLWxheW91dC9zcmMvYXBwL2FwcC5lbGVtZW50LnNjc3MiLCIvaG9tZS91YnVudHUvV2Vic3Rvcm1Qcm9qZWN0cy9jc3Mtb25lbGluZS1sYXlvdXQvYXBwcy9jc3Mtb25lbGluZS1sYXlvdXQvc3JjL2FwcC9fc3VwZXJDZW50ZXIuc2NzcyIsIi9ob21lL3VidW50dS9XZWJzdG9ybVByb2plY3RzL2Nzcy1vbmVsaW5lLWxheW91dC9hcHBzL2Nzcy1vbmVsaW5lLWxheW91dC9zcmMvYXBwL19kZWNvbnN0cnVjdGVkUGFuY2FrZS5zY3NzIiwiL2hvbWUvdWJ1bnR1L1dlYnN0b3JtUHJvamVjdHMvY3NzLW9uZWxpbmUtbGF5b3V0L2FwcHMvY3NzLW9uZWxpbmUtbGF5b3V0L3NyYy9hcHAvX3NpZGViYXJTYXlzLnNjc3MiLCIvaG9tZS91YnVudHUvV2Vic3Rvcm1Qcm9qZWN0cy9jc3Mtb25lbGluZS1sYXlvdXQvYXBwcy9jc3Mtb25lbGluZS1sYXlvdXQvc3JjL2FwcC9fcGFuY2FrZVN0YWNrLnNjc3MiLCIvaG9tZS91YnVudHUvV2Vic3Rvcm1Qcm9qZWN0cy9jc3Mtb25lbGluZS1sYXlvdXQvYXBwcy9jc3Mtb25lbGluZS1sYXlvdXQvc3JjL2FwcC9faG9seUdyYWlsLnNjc3MiLCIvaG9tZS91YnVudHUvV2Vic3Rvcm1Qcm9qZWN0cy9jc3Mtb25lbGluZS1sYXlvdXQvYXBwcy9jc3Mtb25lbGluZS1sYXlvdXQvc3JjL2FwcC9fc3BhbkdyaWQuc2NzcyIsIi9ob21lL3VidW50dS9XZWJzdG9ybVByb2plY3RzL2Nzcy1vbmVsaW5lLWxheW91dC9hcHBzL2Nzcy1vbmVsaW5lLWxheW91dC9zcmMvYXBwL19yZXBlYXRBdXRvZml0TWluTWF4LnNjc3MiLCIvaG9tZS91YnVudHUvV2Vic3Rvcm1Qcm9qZWN0cy9jc3Mtb25lbGluZS1sYXlvdXQvYXBwcy9jc3Mtb25lbGluZS1sYXlvdXQvc3JjL2FwcC9fbGluZVVwLnNjc3MiLCIvaG9tZS91YnVudHUvV2Vic3Rvcm1Qcm9qZWN0cy9jc3Mtb25lbGluZS1sYXlvdXQvYXBwcy9jc3Mtb25lbGluZS1sYXlvdXQvc3JjL2FwcC9fY2xhbXBpbmcuc2NzcyIsIi9ob21lL3VidW50dS9XZWJzdG9ybVByb2plY3RzL2Nzcy1vbmVsaW5lLWxheW91dC9hcHBzL2Nzcy1vbmVsaW5lLWxheW91dC9zcmMvYXBwL19hc3BlY3RSYXRpby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFFQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QUNMRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRE9KOztBQ0pFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURNSjs7QUV4QkU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBRUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FGMEJKOztBRXZCRTtFQUdFLGVBQUE7RUFLQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FGbUJKOztBRzFDRTtFQUNFLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBSDZDSjs7QUcxQ0U7RUFDRSxZQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUgyQ0o7O0FHeENFO0VBQ0UsYUFBQTtBSDBDSjs7QUk3REU7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7RUFFQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUorREo7O0FJNURFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FKOERKOztBSTNERTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBSjZESjs7QUkxREU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBSjRESjs7QUtwRkU7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFFQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUxzRko7O0FLbkZFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUxxRko7O0FLbEZFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBTG9GSjs7QUtqRkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FMbUZKOztBS2hGRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUxrRko7O0FLL0VFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBTGlGSjs7QUs5RUU7O0VBRUUsYUFBQTtBTGdGSjs7QU16SEU7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QU4ySEo7O0FNdkhFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBTnlISjs7QU10SEU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FOd0hKOztBTXJIRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QU51SEo7O0FNcEhFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBTnNISjs7QU1uSEU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBTnFISjs7QU94SkU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDJEQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtBUHlKSjs7QU92Skk7RUFDRSxrQkFBQTtBUHlKTjs7QU9ySkU7RUFDRSxhQUFBO0FQdUpKOztBT3BKRTtFQUNFLGFBQUE7QVBzSko7O0FPcEpJO0VBQ0UsNkJBQUE7QVBzSk47O0FPbkpJO0VBQ0UsNEJBQUE7QVBxSk47O0FPbEpJO0VBQ0UsMkJBQUE7QVBvSk47O0FPakpJO0VBQ0UsNEJBQUE7QVBtSk47O0FRekxFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUVBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBUjJMSjs7QVF4TEU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QVIwTEo7O0FRdkxFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QVJ5TEo7O0FRdExFO0VBQ0UsaUJBQUE7QVJ3TEo7O0FTcE5FO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUVBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBVHNOSjs7QVNuTkU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QVRxTko7O0FTbE5FO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QVRvTko7O0FTak5FO0VBQ0UsaUJBQUE7QVRtTko7O0FVL09FO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUVBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBVmlQSjs7QVU5T0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBVmdQSjs7QVU3T0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FWK09KOztBVTVPRTtFQUNFLGlCQUFBO0FWOE9KIiwiZmlsZSI6ImFwcHMvY3NzLW9uZWxpbmUtbGF5b3V0L3NyYy9hcHAvYXBwLmVsZW1lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblxuICBkaXNwbGF5OiBncmlkO1xuICByb3ctZ2FwOiA1cmVtO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsImJvZHkge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcm93LWdhcDogNXJlbTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLS0xIC5wYXJlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgcmVzaXplOiBib3RoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5leGFtcGxlLS0xIC5jaGlsZCB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kOiBsaWdodHBpbms7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTAlO1xufVxuXG4uZXhhbXBsZS0tMiAucGFyZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICByZXNpemU6IGJvdGg7XG59XG4uZXhhbXBsZS0tMiAuY2hpbGQge1xuICBmbGV4OiAwIDEgMzAwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZWQ7XG4gIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLS0zIC5wYXJlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgMjUlKSAxZnI7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICByZXNpemU6IGJvdGg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmV4YW1wbGUtLTMgLnNpZGViYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXhhbXBsZS0tMyAuY29udGVudCB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5leGFtcGxlLS00IC5wYXJlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICByZXNpemU6IGJvdGg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmV4YW1wbGUtLTQgaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGlnaHRwaW5rO1xuICBwYWRkaW5nOiAycmVtO1xufVxuLmV4YW1wbGUtLTQgbWFpbiB7XG4gIGJhY2tncm91bmQ6IGNvcmFsO1xuICBwYWRkaW5nOiAycmVtO1xufVxuLmV4YW1wbGUtLTQgZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogd2hlYXQ7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtLTUgLnBhcmVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIGF1dG8vYXV0byAxZnIgYXV0bztcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIHJlc2l6ZTogYm90aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uZXhhbXBsZS0tNSBoZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaWdodHBpbms7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG59XG4uZXhhbXBsZS0tNSAubGVmdC1zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICBncmlkLWNvbHVtbjogMS8yO1xufVxuLmV4YW1wbGUtLTUgbWFpbiB7XG4gIGJhY2tncm91bmQ6IGNvcmFsO1xuICBncmlkLWNvbHVtbjogMi8zO1xufVxuLmV4YW1wbGUtLTUgLnJpZ2h0LXNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG59XG4uZXhhbXBsZS0tNSBmb290ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGVhdDtcbiAgcGFkZGluZzogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBncmlkLWNvbHVtbjogMS80O1xufVxuLmV4YW1wbGUtLTUgLmxlZnQtc2lkZWJhcixcbi5leGFtcGxlLS01IC5yaWdodC1zaWRlYmFyIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmV4YW1wbGUtLTYgLnBhcmVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xuICBiYWNrZ3JvdW5kOiBncmV5O1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIHJlc2l6ZTogYm90aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uZXhhbXBsZS0tNiAuc3Bhbi0xMiB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcbiAgZ3JpZC1jb2x1bW46IDEvMTM7XG59XG4uZXhhbXBsZS0tNiAuc3Bhbi02IHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICBncmlkLWNvbHVtbjogMS83O1xufVxuLmV4YW1wbGUtLTYgLnNwYW4tNCB7XG4gIGJhY2tncm91bmQ6IGNvcmFsO1xuICBncmlkLWNvbHVtbjogNC85O1xufVxuLmV4YW1wbGUtLTYgLnNwYW4tMiB7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbiAgZ3JpZC1jb2x1bW46IDMvNTtcbn1cbi5leGFtcGxlLS02IC5zcGFuLTcge1xuICBiYWNrZ3JvdW5kOiAjYmNlMzY4O1xuICBncmlkLXJvdzogMy82O1xuICBncmlkLWNvbHVtbjogMTEvLTE7XG59XG5cbi5leGFtcGxlLS03IC5wYXJlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgcmVzaXplOiBib3RoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5leGFtcGxlLS03IC5wYXJlbnQgZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmV4YW1wbGUtLTcgZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5leGFtcGxlLS03IC5kaXYge1xuICBkaXNwbGF5OiBncmlkO1xufVxuLmV4YW1wbGUtLTcgLmRpdi0tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuLmV4YW1wbGUtLTcgLmRpdi0tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG59XG4uZXhhbXBsZS0tNyAuZGl2LS0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuLmV4YW1wbGUtLTcgLmRpdi0tNCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbi5leGFtcGxlLS04IC5wYXJlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLWdhcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICByZXNpemU6IGJvdGg7XG59XG4uZXhhbXBsZS0tOCAudmlzdWFsIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoZWF0O1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuLmV4YW1wbGUtLTggLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5leGFtcGxlLS04IGgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5leGFtcGxlLS05IC5wYXJlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHJlc2l6ZTogYm90aDtcbn1cbi5leGFtcGxlLS05IC52aXN1YWwge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hlYXQ7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG4uZXhhbXBsZS0tOSAuY2FyZCB7XG4gIHdpZHRoOiBjbGFtcCgyM2NoLCA1MCUsIDQ2Y2gpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiBsaWdodHBpbms7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uZXhhbXBsZS0tOSBoMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZXhhbXBsZS0tMTAgLnBhcmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcmVzaXplOiBib3RoO1xufVxuLmV4YW1wbGUtLTEwIC52aXN1YWwge1xuICBhc3BlY3QtcmF0aW86IDE2Lzk7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cbi5leGFtcGxlLS0xMCAuY2FyZCB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5leGFtcGxlLS0xMCBoMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufSIsIi5leGFtcGxlLS0xIHtcbiAgLnBhcmVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHJlc2l6ZTogYm90aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIC5jaGlsZCB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cblxuIiwiLmV4YW1wbGUtLTIge1xuICAucGFyZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICByZXNpemU6IGJvdGg7XG4gIH1cblxuICAuY2hpbGQge1xuICAgIC8vICBmbGV4OiBub25lIHwgWyA8J2ZsZXgtZ3Jvdyc+IDwnZmxleC1zaHJpbmsnPj8gfHwgPCdmbGV4LWJhc2lzJz4gXVxuICAgIC8vICBJZiB3ZSBkb24ndCB3YW50IHRoZSBpdGVtcyB0byBzdHJldGNoOlxuICAgIGZsZXg6IDAgMSAzMDBweDtcbiAgICAvLyAgSWYgd2UgZG8gd2FudCB0aGUgaXRlbXMgdG8gc3RyZXRjaDpcbiAgICAvLyBmbGV4OiAxIDEgMzAwcHg7XG5cbiAgICAvLyAgIGV0Yy5cbiAgICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCIuZXhhbXBsZS0tMyB7XG4gIC5wYXJlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTUwcHgsIDI1JSkgMWZyO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICByZXNpemU6IGJvdGg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAuc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgYmFja2dyb3VuZDogbGlnaHRwaW5rO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxufVxuIiwiLmV4YW1wbGUtLTQge1xuICAucGFyZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcblxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICByZXNpemU6IGJvdGg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICBoZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG5cbiAgbWFpbiB7XG4gICAgYmFja2dyb3VuZDogY29yYWw7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogd2hlYXQ7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiIsIi5leGFtcGxlLS01IHtcbiAgLnBhcmVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciBhdXRvIC8gYXV0byAxZnIgYXV0bztcblxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICByZXNpemU6IGJvdGg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICBoZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgfVxuXG4gIC5sZWZ0LXNpZGViYXIge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIH1cblxuICBtYWluIHtcbiAgICBiYWNrZ3JvdW5kOiBjb3JhbDtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIH1cblxuICAucmlnaHQtc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogd2hlYXQ7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICB9XG5cbiAgLmxlZnQtc2lkZWJhcixcbiAgLnJpZ2h0LXNpZGViYXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbn1cbiIsIi5leGFtcGxlLS02IHtcbiAgLnBhcmVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcblxuICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgcmVzaXplOiBib3RoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cblxuICAuc3Bhbi0xMiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRwaW5rO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMTM7XG4gIH1cblxuICAuc3Bhbi02IHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA3O1xuICB9XG5cbiAgLnNwYW4tNCB7XG4gICAgYmFja2dyb3VuZDogY29yYWw7XG4gICAgZ3JpZC1jb2x1bW46IDQgLyA5O1xuICB9XG5cbiAgLnNwYW4tMiB7XG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNTtcbiAgfVxuXG4gIC5zcGFuLTcge1xuICAgIGJhY2tncm91bmQ6ICNiY2UzNjg7XG4gICAgZ3JpZC1yb3c6IDMgLyA2O1xuICAgIGdyaWQtY29sdW1uOiAxMSAvIC0xO1xuICB9XG59XG4iLCIuZXhhbXBsZS0tNyB7XG4gIC5wYXJlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDFyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG5cbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHJlc2l6ZTogYm90aDtcbiAgICBvdmVyZmxvdzogYXV0bztcblxuICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICBkaXYge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxuXG4gIGRpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxuXG4gIC5kaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICAmLS0xIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xuICAgIH1cblxuICAgICYtLTIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbiAgICB9XG5cbiAgICAmLS0zIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICB9XG5cbiAgICAmLS00IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gICAgfVxuICB9XG59XG4iLCIuZXhhbXBsZS0tOCB7XG4gIC5wYXJlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLWdhcDogMXJlbTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICByZXNpemU6IGJvdGg7XG4gIH1cblxuICAudmlzdWFsIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHdoZWF0O1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHBpbms7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuIiwiLmV4YW1wbGUtLTkge1xuICAucGFyZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICByZXNpemU6IGJvdGg7XG4gIH1cblxuICAudmlzdWFsIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHdoZWF0O1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgd2lkdGg6IGNsYW1wKDIzY2gsIDUwJSwgNDZjaCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG4iLCIuZXhhbXBsZS0tMTAge1xuICAucGFyZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICByZXNpemU6IGJvdGg7XG4gIH1cblxuICAudmlzdWFsIHtcbiAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZDogbGlnaHRwaW5rO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxufVxuIl19 */"

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***************************************************************************************************************************!*\
  !*** /home/ubuntu/WebstormProjects/css-oneline-layout/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/app.element.scss":
/*!******************************!*\
  !*** ./app/app.element.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/postcss-loader/src??embedded!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-2!./app.element.scss */ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./app/app.element.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/app.element.ts":
/*!****************************!*\
  !*** ./app/app.element.ts ***!
  \****************************/
/*! exports provided: AppElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppElement", function() { return AppElement; });
/* harmony import */ var _app_element_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.element.scss */ "./app/app.element.scss");
/* harmony import */ var _app_element_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_element_scss__WEBPACK_IMPORTED_MODULE_0__);

class AppElement extends HTMLElement {
  connectedCallback() {
    const title = 'css-oneline-layout';
    this.innerHTML = `
      <header class="flex">
    <img alt="Nx logo" width="75" src="https://nx.dev/assets/images/nx-logo-white.svg" />
    <h1>Welcome to ${title}!</h1>
</header>
<main>
    <h2>Resources &amp; Tools</h2>
    <p>
      Thank you for using and showing some ♥ for Nx.
    </p>
    <div class="flex github-star-container">
      <a href="https://github.com/nrwl/nx" target="_blank" rel="noopener noreferrer"> If you like Nx, please give it a star:
        <div class="github-star-badge">
          <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            Star
        </div>
      </a>
    </div>
    <p>
      Here are some links to help you get started.
    </p>
    <ul class="resources">
        <li class="col-span-2">
            <a
                    class="resource flex"
                    href="https://connect.nrwl.io/app/courses/nx-workspaces/intro"
            >
                Nx video course
            </a>
        </li>
        <li class="col-span-2">
            <a
                    class="resource flex"
                    href="https://nx.dev/angular/getting-started/what-is-nx"
            >
                Nx video tutorial
            </a>
        </li>
        <li class="col-span-2">
            <a
                    class="resource flex"
                    href="https://nx.dev/angular/tutorial/01-create-application"
            >
                Interactive tutorial
            </a>
        </li>
        <li class="col-span-2">
            <a class="resource flex" href="https://connect.nrwl.io/">
                <img
                        height="36"
                        alt="Nrwl Connect"
                        src="https://connect.nrwl.io/assets/img/CONNECT_ColorIcon.png"
                />
                <span class="gutter-left">Nrwl Connect</span>
            </a>
        </li>
    </ul>
    <h2>Next Steps</h2>
    <p>Here are some things you can do with Nx.</p>
    <details open>
        <summary>Add UI library</summary>
        <pre>
\`# Generate UI lib
nx g @nrwl/angular:lib ui

# Add a component
nx g @nrwl/angular:component xyz --project ui\`</pre
        >
    </details>
    <details>
        <summary>View dependency graph</summary>
        <pre>\`nx dep-graph\`</pre>
    </details>
    <details>
        <summary>Run affected commands</summary>
        <pre>
\`# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
\`</pre
        >
    </details>
</main>
    `;
  }

}
AppElement.observedAttributes = [];
customElements.define('css-oneline-layout-root', AppElement);

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_element_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.element.ts */ "./app/app.element.ts");


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/WebstormProjects/css-oneline-layout/apps/css-oneline-layout/src/main.ts */"./main.ts");


/***/ })

},[[0,"runtime"]]]);
//# sourceMappingURL=main.js.map