"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, FileText, User, Building, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function SellerTermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/register">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Kembali
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Syarat & Ketentuan Seller</h1>
          </div>
          <p className="text-gray-600">
            Ketentuan khusus untuk bergabung sebagai seller di Govocer
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                Syarat Bergabung & Verifikasi Agen (KYC)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Untuk bergabung sebagai agen di <strong>Govocer</strong>, kamu perlu melalui proses verifikasi data (KYC) terlebih dahulu. 
                Kami akan meminta beberapa informasi seperti nama lengkap, nomor KTP, dan data usaha (jika ada). 
                Proses ini dilakukan untuk memastikan keamanan transaksi dan kepatuhan terhadap aturan yang berlaku.
              </p>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Penting!</h4>
                    <p className="text-red-700 text-sm">
                      Kami berhak menolak pendaftaran jika data yang diberikan tidak valid, tidak lengkap, 
                      atau terindikasi penyalahgunaan akun.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* KYC Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-600" />
                Dokumen yang Diperlukan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-green-600" />
                    Data Pribadi
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Nama lengkap sesuai KTP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Nomor KTP yang valid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Alamat lengkap sesuai KTP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Nomor telepon aktif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Email yang dapat dihubungi</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Building className="w-5 h-5 text-green-600" />
                    Data Usaha (Opsional)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Nama usaha/perusahaan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>NPWP (jika ada)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>SIUP/TDP (jika ada)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Alamat usaha</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Jenis usaha yang dijalankan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Process */}
          <Card>
            <CardHeader>
              <CardTitle>Proses Verifikasi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Submit Data</h4>
                    <p className="text-sm text-gray-600">
                      Lengkapi formulir pendaftaran dengan data yang diminta
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Verifikasi</h4>
                    <p className="text-sm text-gray-600">
                      Tim kami akan memverifikasi data dalam 1-3 hari kerja
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Approval</h4>
                    <p className="text-sm text-gray-600">
                      Akun seller akan diaktifkan setelah verifikasi selesai
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                Ketentuan Aktivitas & Tindakan atas Pelanggaran
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Agen wajib mengikuti semua kebijakan <strong>Govocer</strong> dan peraturan hukum yang berlaku. 
                Segala bentuk aktivitas yang melanggar aturan regulator, bersifat ilegal, atau merugikan pihak lain 
                tidak diperbolehkan di platform kami.
              </p>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-3">Jika ditemukan pelanggaran, kami dapat melakukan beberapa tindakan:</h4>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    Menonaktifkan akun agen
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    Menahan sementara hasil penjualan atau saldo yang belum ditransfer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    Melaporkan ke pihak berwenang bila ada indikasi pelanggaran hukum
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    Mengambil langkah hukum bila diperlukan untuk melindungi platform Govocer dan seluruh penggunanya
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Seller Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle>Kewajiban Seller</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Kewajiban Umum</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Menyediakan voucher game yang valid dan legal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Memastikan voucher tidak expired</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Memberikan informasi yang akurat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Menjaga keamanan akun</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Kewajiban Transaksi</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Memproses pesanan sesuai timeline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Memberikan konfirmasi pembayaran</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Menangani komplain dengan baik</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Mengikuti prosedur refund jika diperlukan</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prohibited Activities */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="w-6 h-6" />
                Aktivitas yang Dilarang
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-700">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Menjual voucher yang diperoleh secara ilegal
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Manipulasi harga atau persaingan tidak sehat
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Menyebarkan informasi palsu atau menyesatkan
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Melakukan transaksi di luar platform
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Menggunakan akun untuk tujuan money laundering
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  Melanggar hak kekayaan intelektual
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Hubungi Tim Verifikasi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Informasi Kontak</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-sm text-gray-600">085811959392</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-600">admin@govocer.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Jam Operasional</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Senin - Jumat: 08:00 - 22:00 WIB</p>
                    <p>Sabtu - Minggu: 09:00 - 21:00 WIB</p>
                    <p className="text-green-600 font-medium">Support verifikasi 24/7 via WhatsApp</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agreement */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Persetujuan</CardTitle>
            </CardHeader>
            <CardContent className="text-green-700">
              <p className="text-sm leading-relaxed mb-4">
                Dengan mendaftar sebagai seller di Govocer, Anda menyatakan bahwa telah membaca, 
                memahami, dan menyetujui semua syarat dan ketentuan yang berlaku. Anda juga 
                menyatakan bahwa data yang diberikan adalah benar dan dapat dipertanggungjawabkan.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Saya setuju dengan syarat dan ketentuan seller</span>
              </div>
            </CardContent>
          </Card>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                Daftar sebagai Seller
              </Button>
            </Link>
            <Link href="/refund-policy">
              <Button variant="outline" className="w-full sm:w-auto">
                Kebijakan Refund
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
