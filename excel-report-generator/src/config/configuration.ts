export default () => ({
    host:process.env.HOST || `localhost${process.env.PORT}`,
    port: parseInt(process.env.PORT) || 3000,
    pathReports: process.env.REPORTS_PATH,
    
  });
  