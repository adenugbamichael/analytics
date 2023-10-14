import React from "react"
import Table from "../Table"
import { productTableHeaders } from "@/utils/config"

async function extractAllProducts() {
  const res = await fetch("http://localhost:3000/api/product/all-products", {
    method: "GET",
    cache: "no-store",
  })

  const data = await res.json()

  return data
}

export default async function ProductListing() {
  const allProducts = await extractAllProducts()

  return (
    <Table
      tableHeaderText='All Products Overview'
      tableHeaderCells={productTableHeaders}
      data={
        allProducts && allProducts.length
          ? allProducts.map((item) => ({
              ...item,
              revenue: item.price * item.sale,
            }))
          : []
      }
    />
  )
}
