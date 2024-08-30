import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await Promise.all([
      app.close(),
    ])
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
  it('/report (POST)', async () => {
    const payload = {
      "titleService": "TaxiMaksim",
      "columnHeaders": [
        "id",
        "status",
        "price",
        "pickupLocation",
        "dropoffLocation",
        "create_date"
      ],
      "dataUrl": "http://client:3001/api/v1/data?page=1&count=10"
    }

    const res = await request(app.getHttpServer())
      .post('/report')
      .send(payload)
      .expect(201)

    expect(res.body).toHaveProperty("id");
    return expect(res.body).toHaveProperty("message");

  });
  it('/report/:id (GET)', async () => {
    //need be sure we create any report before test
    const res = await request(app.getHttpServer())
      .get('/report/1')
      .expect(200)
    expect(res.body).toHaveProperty("id");
    return expect(res.body).toHaveProperty("status");
  });

  it('/report/:id (GET) expect 404', async () => {
    //need be sure we create any report before test
    return await request(app.getHttpServer())
      .get('/report/9999999')
      .expect(404)

  });
})
