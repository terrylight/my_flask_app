"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Shop from "@/components/Shop"; // ✅ make sure this file exists

const categories = ["All", "Electronics", "Clothing", "Home Appliances"];
const brands = ["All", "Samsung", "Apple", "Nike", "LG"];

const products = [
  { id: 1, name: "Samsung TV", category: "Electronics", brand: "Samsung", price: 300 },
  { id: 2, name: "Nike Shoes", category: "Clothing", brand: "Nike", price: 120 },
  { id: 3, name: "LG Fridge", category: "Home Appliances", brand: "LG", price: 500 },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterBrand, setFilterBrand] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchCategory = filterCategory === "All" || product.category === filterCategory;
    const matchBrand = filterBrand === "All" || product.brand === filterBrand;
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchBrand && matchSearch;
  });

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Enhanced Ecommerce Dashboard</h1>

      {/* ✅ Shop component rendered here */}
      <Shop />

      <div className="flex gap-4">
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-64"
        />

        <Select onValueChange={setFilterCategory} defaultValue="All">
          <SelectTrigger className="w-48"><SelectValue placeholder="Category" /></SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setFilterBrand} defaultValue="All">
          <SelectTrigger className="w-48"><SelectValue placeholder="Brand" /></SelectTrigger>
          <SelectContent>
            {brands.map((brand) => (
              <SelectItem key={brand} value={brand}>{brand}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-sm">Brand: {product.brand}</p>
              <p className="text-green-600 font-semibold">KSh {product.price}</p>
              <Button className="mt-2 w-full" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cart */}
      <Sheet>
        <SheetTrigger>
          <Button variant="outline"><ShoppingCart className="mr-2" />View Cart ({cart.length})</Button>
        </SheetTrigger>
        <SheetContent>
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          {cart.length === 0 ? <p>No items in cart.</p> : cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2">
              <span>{item.name}</span>
              <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </div>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
}
