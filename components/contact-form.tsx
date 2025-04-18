"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Form gönderildi",
        description: "En kısa sürede sizinle iletişime geçeceğiz.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Adınız Soyadınız</Label>
          <Input
            id="name"
            name="name"
            placeholder="Adınız Soyadınız"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-posta</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="E-posta adresiniz"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Telefon numaranız"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Konu</Label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
            required
          >
            <option value="">Konu Seçiniz</option>
            <option value="Ceza Hukuku">Ceza Hukuku</option>
            <option value="Aile Hukuku">Aile Hukuku</option>
            <option value="Ticaret Hukuku">Ticaret Hukuku</option>
            <option value="İş Hukuku">İş Hukuku</option>
            <option value="Gayrimenkul Hukuku">Gayrimenkul Hukuku</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mesajınız</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Mesajınızı yazınız"
          value={formData.message}
          onChange={handleChange}
          className="min-h-[120px]"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
        {isSubmitting ? "Gönderiliyor..." : "Gönder"}
      </Button>
    </form>
  )
}
