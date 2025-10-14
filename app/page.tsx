"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "@/components/ui/button"
import { ChevronRight, Gamepad2, Gift, CreditCard, ArrowRight, Smartphone, Monitor, Globe, Users, LucideProps, CheckCircle2, Zap, Shield, Sparkles, Search, ShoppingCart, User, LogOut } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/data"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { formatPrice } from "@/lib/data"
import { useRef, useState } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useUser } from "@/contexts/user-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { RedeemCode } from "@/components/redeem-code"

export default function Home() {
  const { user, logout } = useUser()
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [openQna, setOpenQna] = useState<number | null>(null);
  const [points, setPoints] = useState(0)

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    setShowSearchResults(query.length > 0)
  }

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const servicesRef = useRef<HTMLDivElement>(null)
  
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const categories = [
    { name: "PC Gaming", icon: (props: LucideProps) => <Monitor {...props} /> },
    { name: "Console Gaming", icon: (props: LucideProps) => <Gamepad2 {...props} /> },
    { name: "Mobile Gaming", icon: (props: LucideProps) => <Smartphone {...props} /> },
    { name: "Online Gaming", icon: (props: LucideProps) => <Globe {...props} /> },
  ]

  const heroSlides = [
    {
      key: "slide1",
      bg: "/banner_01.jpg",
      title: "Mobile Legends: Bang Bang",
      subtitle: "Get your Starlight, Diamonds, and more!",
    },
    {
      key: "slide2",
      bg: "/banner_02.jpg",
      title: "Free Fire",
      subtitle: "Top up your Diamonds and enjoy the battle!",
    },
    {
      key: "slide3",
      bg: "/banner_03.jpg",
      title: "PUBG Mobile",
      subtitle: "Get your UC and dominate the battleground!",
    },
    {
      key: "slide4",
      bg: "/banner_04.webp",
      title: "Honor of Kings",
      subtitle: "Ultimate 5v5 Hero Battle Game",
    },
    {
      key: "slide5",
      bg: "/banner_05.jpg",
      title: "Ragnarok Guild Championship",
      subtitle: "Join the adventure and win rewards!",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    customPaging: () => (
      <div className="my-4 h-2 transition-all duration-300">
        <div
          className="!mx-[4px] h-2 w-2 rounded-full bg-white/30 \
          hover:bg-white/50 [.slick-active_&]:w-8 [.slick-active_&]:bg-white"
        />
      </div>
    ),
    dotsClass: "slick-dots flex justify-center w-full",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
          centerMode: false,
        },
      },
    ],
  };

  const marketplaceFeatures = [
    {
      name: 'Top Up Game Credits',
      description: 'Instantly top up your favorite games with a variety of payment methods.',
      icon: <Gamepad2 className="h-8 w-8 text-blue-400" />,
    },
    {
      name: 'Gift Cards',
      description: 'Purchase digital gift cards for popular platforms and games.',
      icon: <Gift className="h-8 w-8 text-purple-400" />,
    },
    {
      name: 'Fast Delivery',
      description: 'Receive your codes and credits within seconds after payment.',
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
    },
    {
      name: 'Secure Payment',
      description: 'Shop with confidence using our secure and trusted payment system.',
      icon: <CreditCard className="h-8 w-8 text-green-400" />,
    },
    {
      name: '24/7 Support',
      description: 'Our support team is ready to help you anytime, anywhere.',
      icon: <Users className="h-8 w-8 text-pink-400" />,
    },
    {
      name: 'Promos & Discounts',
      description: 'Enjoy regular promotions and exclusive discounts for members.',
      icon: <Sparkles className="h-8 w-8 text-orange-400" />,
    },
  ];

  const qnaList = [
    {
      question: "Apakah Diamonds/Chips/Item Game dari govocer.com Legal?",
      answer: (
        <span>
          Semua Diamonds, item dalam game, dan voucher yang dijual di govocer.com <b>100% legal dan bersumber dari developer/publisher</b>. Jangan khawatir, berbelanja di govocer.com dijamin aman.
        </span>
      ),
    },
    {
      question: "Bagaimana Cara Top-Up Diamonds atau Beli Voucher?", 
      answer: (
        <span>
          Cukup pilih game Anda, pilih item atau voucher yang diinginkan, masukkan ID pemain, dan selesaikan pembayaran. Pesanan Anda akan diproses secara instan!
        </span>
      ),
    },
    {
      question: "Apakah Bisa Bayar Menggunakan QRIS?",
      answer: (
        <span>
          Ya, govocer.com mendukung berbagai metode pembayaran termasuk QRIS dan Virtual Account.
        </span>
      ),
    },
    {
      question: "Pembayaran Berhasil, Tapi Item Belum Diterima?",
      answer: (
        <span>
          Silakan hubungi layanan pelanggan kami dengan detail pesanan Anda. Kami akan membantu menyelesaikan masalah Anda secepatnya.
        </span>
      ),
    },
    {
      question: "Mengapa Harus Beli di govocer.com?",
      answer: (
        <span>
          Kami menawarkan pengiriman cepat, pembayaran aman, dan hanya produk resmi dan legal. Kepuasan dan keamanan Anda adalah prioritas kami!
        </span>
      ),
    },
  ];

  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative mt-20 sm:mt-28 mb-12 sm:mb-16">
        <div className="w-full mx-auto max-w-[1920px]">
          <Slider
            {...sliderSettings}
            className="h-full [&_.slick-list]:h-full [&_.slick-dots]:bottom-[-36px] [&_.slick-prev]:left-3 sm:[&_.slick-prev]:left-6 [&_.slick-next]:right-3 sm:[&_.slick-next]:right-6 [&_.slick-prev]:z-10 [&_.slick-next]:z-10 [&_.slick-prev]:bg-white/20 [&_.slick-next]:bg-white/20 [&_.slick-prev]:backdrop-blur-sm [&_.slick-next]:backdrop-blur-sm [&_.slick-prev]:rounded-xl [&_.slick-next]:rounded-xl [&_.slick-prev]:w-9 [&_.slick-next]:w-9 sm:[&_.slick-prev]:w-11 sm:[&_.slick-next]:w-11 [&_.slick-prev]:h-9 [&_.slick-next]:h-9 sm:[&_.slick-prev]:h-11 sm:[&_.slick-next]:h-11 [&_.slick-prev]:flex [&_.slick-next]:flex [&_.slick-prev]:items-center [&_.slick-next]:items-center [&_.slick-prev]:justify-center [&_.slick-next]:justify-center [&_.slick-prev]:hover:bg-white/30 [&_.slick-next]:hover:bg-white/30 [&_.slick-prev]:transition-all [&_.slick-next]:transition-all [&_.slick-prev]:duration-300 [&_.slick-next]:duration-300"
          >
            {heroSlides.map((slide) => (
              <div key={slide.key} className="relative aspect-[16/9] sm:aspect-[21/9]">
                <img src={slide.bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-white/10" />
                <div className="relative z-10 h-full flex items-center">
                  <div className="px-4 sm:px-8 md:px-12 lg:px-16 w-full sm:max-w-xl lg:max-w-2xl">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm text-xs sm:text-sm mb-4">
                      Populer • Pilihan Gamer
                    </span>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-xl">
                      {slide.title}
                    </h1>
                    <p className="mt-3 sm:mt-4 text-white/90 text-sm sm:text-lg md:text-xl 2xl:text-2xl leading-relaxed max-w-2xl">
                      {slide.subtitle}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button
                        className="bg-[#2563eb] hover:bg-[#2563eb]/90 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg hover:shadow-blue-600/20 transition-all hover:-translate-y-0.5"
                        onClick={scrollToServices}
                      >
                        Belanja Sekarang
                      </Button>
                      {/* <Link href="/marketplace">
                        <Button
                          className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl backdrop-blur-md transition-all"
                        >
                          Jelajahi Marketplace
                        </Button>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Featured Products Section */}
      <section ref={servicesRef} className="py-16 sm:py-20 md:py-28 2xl:py-36 mt-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="w-full mx-auto max-w-[1920px] px-4 sm:px-6 2xl:px-8">
          <div className="text-center mb-12 sm:mb-20 2xl:mb-28">
            <div className="inline-block relative">
              <span className="inline-block px-6 sm:px-8 2xl:px-10 py-3 sm:py-4 2xl:py-5 bg-gradient-to-r from-[#2563eb]/10 to-blue-600/10 text-[#2563eb] rounded-2xl text-sm sm:text-base 2xl:text-xl font-semibold mb-4 sm:mb-6 2xl:mb-8 border border-[#2563eb]/30 shadow-lg backdrop-blur-sm">
                ✨ Produk Unggulan
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-bold mb-6 sm:mb-8 2xl:mb-10">
              <span className="bg-gradient-to-r from-[#2563eb] via-blue-600 to-indigo-600 bg-clip-text text-transparent">Voucher Game Terpopuler</span>
            </h2>
            <p className="text-lg sm:text-xl 2xl:text-3xl text-gray-700 max-w-3xl 2xl:max-w-5xl mx-auto px-4 leading-relaxed">
              Pilih dari berbagai macam voucher digital dan kredit game yang kami sediakan dengan harga terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 2xl:gap-14">
            {products.map((product) => {
              const isHighlighted = product.name.toLowerCase().includes('mobile legends') || 
                    product.name.toLowerCase().includes('free fire diamonds') ||
                    product.name.toLowerCase().includes('pubg mobile') ||
                    product.name.toLowerCase().includes('ragnarok m classic');

              return (
                <div key={product.id} className={`relative ${!isHighlighted && 'cursor-not-allowed'}`}>
                  {!isHighlighted && (
                    <div className="absolute inset-0 bg-black/50 z-10 rounded-lg flex items-center justify-center">
                      <span className="text-white font-medium text-sm sm:text-base 2xl:text-lg px-4 py-2 bg-black/50 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <Link href={isHighlighted ? `/products/${product.id}` : '#'} className={!isHighlighted ? 'pointer-events-none' : ''}>
                    <Card className={`group cursor-pointer bg-white/90 backdrop-blur-sm border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${!isHighlighted && 'opacity-50'}`}>
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 2xl:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium text-xs sm:text-sm 2xl:text-lg">
                              {formatPrice(product.price)}
                            </span>
                            <Button className="bg-gradient-to-r from-[#2563eb] to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white text-xs sm:text-sm 2xl:text-base px-5 sm:px-6 2xl:px-7 py-2.5 sm:py-3 2xl:py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#2563eb]/30 hover:-translate-y-1 hover:scale-105">
                              Lihat Detail
                            </Button>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-6 2xl:p-8">
                        <h3 className="font-bold text-lg sm:text-xl 2xl:text-3xl mb-2 line-clamp-1 group-hover:text-[#2563eb] transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-sm sm:text-base 2xl:text-xl text-gray-600 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QnA Section */}
      <section className="py-16 sm:py-20 md:py-28 2xl:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-transparent to-blue-50/30" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-5xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 2xl:px-8">
          <div className="text-center mb-12 sm:mb-20 2xl:mb-28">
            <div className="inline-block relative">
              <span className="inline-block px-6 sm:px-8 2xl:px-10 py-3 sm:py-4 2xl:py-5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 rounded-2xl text-sm sm:text-base 2xl:text-xl font-semibold mb-4 sm:mb-6 2xl:mb-8 border border-indigo-200/50 shadow-lg backdrop-blur-sm">
                ❓ Pertanyaan Umum
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-bold mb-6 sm:mb-8 2xl:mb-10">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Frequently Asked Questions</span>
            </h2>
            <p className="text-lg sm:text-xl 2xl:text-3xl text-gray-700 max-w-3xl 2xl:max-w-5xl mx-auto px-4 leading-relaxed">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 2xl:space-y-8">
            {qnaList.map((qna, idx) => (
              <div 
                key={qna.question} 
                className="group relative"
              >
                <button
                  className={`w-full flex items-center justify-between p-6 sm:p-8 2xl:p-10 text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold rounded-2xl sm:rounded-3xl 2xl:rounded-[2rem] transition-all duration-500 ${
                    openQna === idx 
                      ? "bg-white/95 backdrop-blur-lg shadow-2xl border border-indigo-200/50 hover:shadow-3xl" 
                      : "bg-white/70 hover:bg-white/90 border border-gray-200/50 hover:shadow-xl hover:-translate-y-1"
                  }`}
                  onClick={() => setOpenQna(openQna === idx ? null : idx)}
                >
                  <div className="flex items-center gap-3 sm:gap-4 2xl:gap-6">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 2xl:w-14 2xl:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      openQna === idx 
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg" 
                        : "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 hover:from-indigo-200 hover:to-purple-200"
                    }`}>
                      <span className="text-sm sm:text-lg 2xl:text-2xl font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-left font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 text-base sm:text-lg md:text-xl 2xl:text-2xl">
                      {qna.question}
                    </span>
                  </div>
                  <ChevronRight 
                    className={`ml-4 h-6 w-6 sm:h-8 sm:w-8 2xl:h-10 2xl:w-10 transition-all duration-500 ${
                      openQna === idx 
                        ? "rotate-90 text-indigo-600" 
                        : "text-gray-500 group-hover:text-indigo-500"
                    }`} 
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openQna === idx ? "max-h-[600px] 2xl:max-h-[900px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 sm:p-8 2xl:p-10 pt-4 sm:pt-6 2xl:pt-8 bg-gradient-to-br from-white/80 to-indigo-50/50 backdrop-blur-sm rounded-b-2xl sm:rounded-b-3xl 2xl:rounded-b-[2rem] border-x border-b border-indigo-200/30 shadow-lg">
                    <div className="flex items-start gap-4 sm:gap-6 2xl:gap-8">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-14 2xl:h-14 rounded-2xl bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8 text-green-600" />
                      </div>
                      <div className="text-base sm:text-lg 2xl:text-2xl text-gray-700 leading-relaxed font-medium">
                        {qna.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 2xl:mt-20 text-center">
            <p className="text-base sm:text-lg 2xl:text-2xl text-gray-600 mb-6 sm:mb-8 2xl:mb-10 font-medium">Masih punya pertanyaan?</p>
            <a
              href="https://wa.me/6285811959392"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 sm:px-10 2xl:px-12 py-4 sm:py-5 2xl:py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl text-base sm:text-lg 2xl:text-2xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 hover:scale-105"
            >
              <img src="/wa_img.png" alt="WhatsApp" className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10" />
              💬 Chat dengan Kami
            </a>
          </div>
        </div>
      </section>

      {/* Sell Voucher Section */}
      <section className="py-16 sm:py-20 md:py-28 2xl:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-transparent to-pink-50/30" />
        <div className="max-w-5xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 2xl:px-8">
          <div className="text-center mb-8 sm:mb-12 2xl:mb-16">
            <div className="inline-block relative">
              <span className="inline-block px-6 sm:px-8 2xl:px-10 py-3 sm:py-4 2xl:py-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 rounded-2xl text-sm sm:text-base 2xl:text-xl font-semibold mb-4 sm:mb-6 2xl:mb-8 border border-purple-200/50 shadow-lg backdrop-blur-sm">
                💰 Jual Voucher Game
              </span>
            </div>
            <p className="text-lg sm:text-xl 2xl:text-3xl text-gray-700 max-w-3xl 2xl:max-w-5xl mx-auto px-4 leading-relaxed font-medium">
              Tukar voucher game yang tidak terpakai menjadi uang tunai. Proses cepat, aman, dan terpercaya.
            </p>
          </div>

          <div className="flex justify-center">
            {user ? (
              <Link href="/sell-voucher">
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-base sm:text-lg 2xl:text-2xl px-8 sm:px-10 2xl:px-12 py-4 sm:py-5 2xl:py-6 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 hover:scale-105 font-bold"
                >
                  💰 Jual Sekarang
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-base sm:text-lg 2xl:text-2xl px-8 sm:px-10 2xl:px-12 py-4 sm:py-5 2xl:py-6 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 hover:scale-105 font-bold"
                >
                  🔐 Login untuk Jual Voucher
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'Instant Delivery',
    description: 'Get your game vouchers and credits instantly after purchase.',
    icon: <Zap className="h-6 w-6 text-blue-400" />,
    benefits: [
      'Digital delivery within minutes',
      'No waiting time',
      '24/7 availability'
    ]
  },
  {
    name: 'Secure Payments',
    description: 'Shop with confidence using our secure payment system.',
    icon: <Shield className="h-6 w-6 text-blue-400" />,
    benefits: [
      'Multiple payment methods',
      'SSL encryption',
      'Secure checkout process'
    ]
  },
  {
    name: 'Wide Selection',
    description: 'Access to all major gaming platforms and titles.',
    icon: <Gamepad2 className="h-6 w-6 text-blue-400" />,
    benefits: [
      'All major gaming platforms',
      'Popular game titles',
      'Regular new additions'
    ]
  },
]