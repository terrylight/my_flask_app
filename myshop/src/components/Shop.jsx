"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

const categories = [
  "All", "Electronics", "Clothing", "Home Appliances", "Accessories", "Books",
  "Toys", "Beauty", "Sports", "Groceries", "Health"
];

const brands = [
  "All", "Samsung", "Apple", "Sony", "LG", "Adidas", "Nike", "HP", "Dell", "Puma", "Lenovo"
];

const products = [
  { id: 1, name: "Samsung TV", category: "Electronics", brand: "Samsung", price: 300 },
  { id: 2, name: "Nike Shoes", category: "Clothing", brand: "Nike", price: 120 },
  { id: 3, name: "LG Fridge", category: "Home Appliances", brand: "LG", price: 500 },
];

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterBrand, setFilterBrand] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [mpesaNumber, setMpesaNumber] = useState("");

  const filteredProducts = products.filter((product) => {
    const categoryMatch = filterCategory === "All" || product.category === filterCategory;
    const brandMatch = filterBrand === "All" || product.brand === filterBrand;
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && brandMatch && searchMatch;
  });

  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const handleMpesaPayment = () => {
    if (!mpesaNumber) return alert("Enter your M-PESA number");
    alert(`STK push sent to ${mpesaNumber}. Complete payment to Till +254705855677.`);
  };

  const handleCardPayment = () => alert("Redirecting to secure Visa/Mastercard gateway...");
  const handlePayPalPayment = () => alert("Redirecting to PayPal checkout...");

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold tracking-tight">My E-Shop</h1>
        <div className="flex items-center gap-3">
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64"
          />
          <Button onClick={() => setIsAdmin(!isAdmin)} variant="outline">
            {isAdmin ? "Switch to User" : "Switch to Admin"}
          </Button>
          <Sheet>
            <SheetTrigger>
              <ShoppingCart /> View Cart ({cart.length})
            </SheetTrigger>
            <SheetContent>
              <h2 className="text-xl font-bold mb-2">Your Cart</h2>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-1">
                  <span>{item.name}</span>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <div className="mt-4">
                <h3 className="font-semibold">Payment Options</h3>
                <div className="mt-2 space-y-2">
                  <div>
                    <Label>MPESA Number:</Label>
                    <Input
                      value={mpesaNumber}
                      onChange={(e) => setMpesaNumber(e.target.value)}
                      placeholder="e.g. 07XXXXXXXX"
                    />
                    <Button onClick={handleMpesaPayment} className="w-full mt-2">
                      Pay with MPESA
                    </Button>
                  </div>
                  <Button onClick={handlePayPalPayment} className="w-full bg-blue-600">
                    Pay with PayPal
                  </Button>
                  <Button onClick={handleCardPayment} className="w-full bg-yellow-600">
                    Pay with Visa/MasterCard
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <Select onValueChange={setFilterCategory} defaultValue="All">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setFilterBrand} defaultValue="All">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select Brand" />
          </SelectTrigger>
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
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>Brand: {product.brand}</p>
              <p className="font-bold text-green-600">KSh {product.price}</p>
              <Button className="mt-2 w-full" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs for Admin/User */}
      <Tabs defaultValue={isAdmin ? "admin" : "account"} className="mt-10">
        <TabsList>
          <TabsTrigger value="admin">Admin Dashboard</TabsTrigger>
          <TabsTrigger value="account">User Dashboard</TabsTrigger>
        </TabsList>

        <TabsContent value="admin">
          <h2 className="text-2xl font-bold mt-4">Admin Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <Card><CardContent className="p-4">📦 View Orders</CardContent></Card>
            <Card><CardContent className="p-4">👥 Manage Customers</CardContent></Card>
            <Card><CardContent className="p-4">💳 Payment Tracking</CardContent></Card>
            <Card><CardContent className="p-4">📊 Inventory Management</CardContent></Card>
            <Card><CardContent className="p-4">⚙️ System Settings</CardContent></Card>
            <Card><CardContent className="p-4">📈 Reports & Analytics</CardContent></Card>
          </div>
        </TabsContent>

        <TabsContent value="account">
          <h2 className="text-2xl font-bold mt-4">User Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <Card><CardContent className="p-4">🔐 Sign In / Sign Up</CardContent></Card>
            <Card><CardContent className="p-4">📦 My Orders</CardContent></Card>
            <Card><CardContent className="p-4">💬 Support Tickets</CardContent></Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Shop;
