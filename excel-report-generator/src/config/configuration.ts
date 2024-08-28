export default () => ({
//     PORT=3000
// REPORTS_PATH=../../static/reports
    port: parseInt(process.env.PORT) || 3000,
    pathReports: 
   process.env.REPORTS_PATH,
    
  });
  