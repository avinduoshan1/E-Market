require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "API is running" });
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: { status: "PUBLISHED" },
      include: {
        seller: {
          select: {
            businessName: true,
            district: true,
            whatsappNumber: true,
          },
        },
        category: true,
      },
      orderBy: { createdAt: "desc" },
    });

res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Products ලබාගැනීමට නොහැකි වුණා." });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
