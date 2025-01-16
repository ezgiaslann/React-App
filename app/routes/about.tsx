import { Grid, Typography } from "@mui/material";

export default function AboutRoute() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ textAlign: "center", marginTop: "20px" }}>
      <Grid item xs={12}>
        <Typography variant="body1" className="mt-4 text-justify" style={{ textAlign: "center" }}>
          Akakçe, kurulduğu 2000 yılından bu yana Türkiye'nin lider karşılaştırmalı alışveriş platformudur. Akakçe, sahip olduğu teknolojiler ve sürekli inovasyon ile Türk müşterilerine en gelişmiş deneyimi yaşatmayı hedeflemektedir.
          Akakçe'nin web sitesi ve mobil uygulamaları her ay 40 milyondan fazla alışverişçiyi desteklemektedir. Alışveriş yapanlar, yüz binlerce ürün için detaylı fiyat, özellik ve konum bilgilerine ulaşabilmektedir. Akakçe, online satıcılar için en önemli referans kaynaklarından biridir.
          2013 yılında Japon Netprice grubu şirkete stratejik bir yatırım yapmıştır.
          Akakçe, Ankara'da ODTÜ Teknokent'te yer almakta ve İstanbul'da bir ofisi bulunmaktadır.
        </Typography>
      </Grid>
    </Grid>
  );
}