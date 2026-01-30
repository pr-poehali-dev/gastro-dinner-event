import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [availableSeats] = useState(150);
  const totalSeats = 200;

  const chefs = [
    {
      name: "Жан-Пьер Дюбуа",
      cuisine: "Французская кухня",
      restaurant: "Le Château",
      image: "https://cdn.poehali.dev/projects/cea87fd4-0ec0-4031-8968-e260380c4b40/files/1ea244ad-d1da-4f02-ae54-8d0b69b3f35d.jpg",
      description: "Звезда Michelin, специалист по классической французской кухне"
    },
    {
      name: "Масато Танака",
      cuisine: "Японская кухня",
      restaurant: "Sakura Dreams",
      image: "https://cdn.poehali.dev/projects/cea87fd4-0ec0-4031-8968-e260380c4b40/files/9578d2e2-f76e-4be7-83a8-192bf857748b.jpg",
      description: "Мастер суши с 20-летним стажем из Токио"
    },
    {
      name: "Антонио Марчелли",
      cuisine: "Итальянская кухня",
      restaurant: "Bella Napoli",
      image: "https://cdn.poehali.dev/projects/cea87fd4-0ec0-4031-8968-e260380c4b40/files/64a2ee6e-5529-474b-9a3b-d8f68d3e413f.jpg",
      description: "Эксперт по аутентичной неаполитанской кухне"
    },
    {
      name: "Елена Петрова",
      cuisine: "Русская кухня",
      restaurant: "Царская трапеза",
      image: "https://cdn.poehali.dev/projects/cea87fd4-0ec0-4031-8968-e260380c4b40/files/7660c1a3-13a8-49e9-8295-8e2522f543c0.jpg",
      description: "Лучший шеф-повар современной русской кухни"
    }
  ];

  const restaurants = [
    {
      name: "Le Château",
      cuisine: "Французская",
      description: "Звезда Michelin с классической французской кухней",
      image: "https://cdn.poehali.dev/projects/cea87fd4-0ec0-4031-8968-e260380c4b40/files/e9aa7a00-d538-47c6-b021-56ae49ec86e2.jpg",
      icon: "🇫🇷"
    },
    {
      name: "Sakura Dreams",
      cuisine: "Японская",
      description: "Аутентичная японская кухня из Токио",
      image: "https://cdn.poehali.dev/projects/cea87fd4-0ec0-4031-8968-e260380c4b40/files/13fb9cba-fec9-49ac-af84-4d205aa54db1.jpg",
      icon: "🇯🇵"
    },
    {
      name: "Bella Napoli",
      cuisine: "Итальянская",
      description: "Неаполитанские традиции и домашний уют",
      image: "https://cdn.poehali.dev/projects/cea87fd4-0ec0-4031-8968-e260380c4b40/files/24c4be73-d6f4-4d32-ba02-f39834321333.jpg",
      icon: "🇮🇹"
    },
    {
      name: "Царская трапеза",
      cuisine: "Русская",
      description: "Современная интерпретация русской классики",
      image: "https://cdn.poehali.dev/projects/cea87fd4-0ec0-4031-8968-e260380c4b40/files/244a3614-b642-4c38-9423-ca3b43ea78cd.jpg",
      icon: "🇷🇺"
    }
  ];

  const cuisines = [
    {
      country: "Франция",
      icon: "🇫🇷",
      dishes: ["Фуа-гра с трюфельным кремом", "Буйабес провансаль", "Утиное конфи"],
      image: "https://cdn.poehali.dev/projects/cea87fd4-0ec0-4031-8968-e260380c4b40/files/82d8b7ab-81c7-4e33-8e5a-1e85b40bbc91.jpg"
    },
    {
      country: "Япония",
      icon: "🇯🇵",
      dishes: ["Сашими из тунца отори", "Суши омакасе", "Вагю терияки"],
      image: "https://cdn.poehali.dev/projects/cea87fd4-0ec0-4031-8968-e260380c4b40/files/0d9a1f33-931c-48ad-a1a9-4112b609f8d4.jpg"
    },
    {
      country: "Италия",
      icon: "🇮🇹",
      dishes: ["Паста карбонара с трюфелем", "Ризотто с белыми грибами", "Тирамису"],
      image: "https://cdn.poehali.dev/projects/cea87fd4-0ec0-4031-8968-e260380c4b40/files/5716ea4d-e1da-4c7c-b4d9-057111473420.jpg"
    },
    {
      country: "Россия",
      icon: "🇷🇺",
      dishes: ["Осетрина царская", "Черная икра на блинах", "Строганов из мраморной говядины"],
      image: "https://cdn.poehali.dev/projects/cea87fd4-0ec0-4031-8968-e260380c4b40/files/085c247a-97fa-4086-ad81-f09f2f3e8d7c.jpg"
    }
  ];

  const program = [
    {
      time: "18:00",
      event: "Открытие и приветственный коктейль",
      icon: "Wine"
    },
    {
      time: "18:30",
      event: "Первая часть: Франция & Италия",
      icon: "ChefHat"
    },
    {
      time: "19:30",
      event: "Выступление симфонического оркестра",
      icon: "Music"
    },
    {
      time: "20:00",
      event: "Вторая часть: Япония & Россия",
      icon: "ChefHat"
    },
    {
      time: "21:00",
      event: "Дегустация премиальных напитков",
      icon: "GlassWater"
    },
    {
      time: "22:00",
      event: "Закрытие вечера",
      icon: "Sparkles"
    }
  ];

  const drinks = [
    {
      category: "Вина",
      items: ["Шато Марго 2015", "Бароло Ризерва", "Шабли Гран Крю"],
      icon: "Wine"
    },
    {
      category: "Крепкие напитки",
      items: ["Коньяк Hennessy XO", "Виски Macallan 18", "Саке Dassai 23"],
      icon: "GlassWater"
    },
    {
      category: "Авторские коктейли",
      items: ["Signature Martini", "Golden Negroni", "Tokyo Mule"],
      icon: "Martini"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Гастроужин</h1>
          <div className="hidden md:flex gap-6">
            <a href="#concept" className="hover:text-primary transition-colors">Концепция</a>
            <a href="#chefs" className="hover:text-primary transition-colors">Шефы</a>
            <a href="#restaurants" className="hover:text-primary transition-colors">Рестораны</a>
            <a href="#program" className="hover:text-primary transition-colors">Программа</a>
            <a href="#drinks" className="hover:text-primary transition-colors">Напитки</a>
            <a href="#cigar" className="hover:text-primary transition-colors">Сигарная веранда</a>
            <a href="#booking" className="hover:text-primary transition-colors">Билеты</a>
          </div>
          <Button className="gradient-purple-orange hover-scale">
            Забронировать
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple-orange opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-primary/20 rounded-full border border-primary/50">
            <span className="text-sm font-semibold">27 апреля 2026 • 18:00</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Симфония Вкуса
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Уникальный гастроужин объединяет кухни мира под музыку симфонического оркестра
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-lg">
              <Icon name="Users" size={24} className="text-primary" />
              <span>Осталось мест: <strong className="text-primary">{availableSeats}</strong> из {totalSeats}</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Icon name="Ticket" size={24} className="text-secondary" />
              <span className="text-3xl font-bold gradient-text">10 000 ₽</span>
            </div>
          </div>
          
          <Button size="lg" className="text-lg px-8 py-6 gradient-purple-orange hover-scale">
            <Icon name="Sparkles" size={20} className="mr-2" />
            Забронировать билет
          </Button>
        </div>
      </section>

      <section id="concept" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 gradient-text">
            Концепция вечера
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-4">Кухни мира</h3>
                <p className="text-muted-foreground">
                  Четыре знаменитых ресторана представят лучшие блюда французской, японской, итальянской и русской кухонь
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">🎻</div>
                <h3 className="text-2xl font-bold mb-4">Живая музыка</h3>
                <p className="text-muted-foreground">
                  Симфонический оркестр создаст незабываемую атмосферу, сопровождая каждое блюдо уникальной мелодией
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">👨‍🍳</div>
                <h3 className="text-2xl font-bold mb-4">Мастер-классы</h3>
                <p className="text-muted-foreground">
                  Шефы расскажут историю каждого блюда и поделятся секретами приготовления прямо на ваших глазах
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="chefs" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 gradient-text">
            Звёздные шефы
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chefs.map((chef, index) => (
              <Card key={index} className="group hover-scale bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={chef.image} 
                      alt={chef.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{chef.name}</h3>
                    <p className="text-primary font-semibold mb-1">{chef.cuisine}</p>
                    <p className="text-sm text-muted-foreground mb-3">{chef.restaurant}</p>
                    <p className="text-sm">{chef.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="restaurants" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 gradient-text">
            Рестораны-участники
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className="group hover-scale bg-card/80 backdrop-blur-sm border-primary/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 text-5xl">{restaurant.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{restaurant.name}</h3>
                    <p className="text-primary font-semibold mb-3">{restaurant.cuisine} кухня</p>
                    <p className="text-muted-foreground">{restaurant.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6 gradient-text">
            Кухни мира
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Авторские блюда от шефов из разных стран — настоящее путешествие вкусов
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cuisines.map((cuisine, index) => (
              <Card key={index} className="group hover-scale bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-accent/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={cuisine.image} 
                      alt={cuisine.country}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <span className="text-5xl">{cuisine.icon}</span>
                      <h3 className="text-3xl font-bold">{cuisine.country}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {cuisine.dishes.map((dish, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Icon name="ChefHat" size={20} className="text-accent flex-shrink-0 mt-1" />
                          <span className="text-foreground">{dish}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 gradient-text">
            Программа вечера
          </h2>
          
          <div className="space-y-4">
            {program.map((item, index) => (
              <Card key={index} className="hover-scale bg-gradient-to-r from-card/80 to-card/40 border-primary/20">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="flex-shrink-0 w-20 text-2xl font-bold text-primary">
                    {item.time}
                  </div>
                  <Icon name={item.icon} size={32} className="text-secondary flex-shrink-0" />
                  <div className="flex-grow">
                    <p className="text-lg font-semibold">{item.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="drinks" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 gradient-text">
            Дегустация напитков
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {drinks.map((category, index) => (
              <Card key={index} className="hover-scale bg-gradient-to-br from-accent/10 to-primary/5 border-accent/20">
                <CardContent className="p-8">
                  <Icon name={category.icon} size={48} className="text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cigar" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/10"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-6 gradient-text">
            Сигарная веранда
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Эксклюзивная зона для ценителей премиальных сигар и благородных напитков
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-accent/30 hover-scale">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">🍂</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Премиальная коллекция</h3>
                    <p className="text-muted-foreground mb-4">
                      Кубинские сигары ручной работы от ведущих производителей
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span><strong>Cohiba Behike 56</strong> — флагман кубинской индустрии</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span><strong>Montecristo No. 2</strong> — классика жанра</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span><strong>Partagás Serie D No. 4</strong> — насыщенный вкус</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span><strong>Romeo y Julieta Churchill</strong> — элегантность</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-primary/30 hover-scale">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">🥃</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Благородные напитки</h3>
                    <p className="text-muted-foreground mb-4">
                      Тщательно подобранная карта крепких напитков для идеального сочетания
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span><strong>Cognac Rémy Martin Louis XIII</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span><strong>Виски Glenfiddich 30 Year Old</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span><strong>Ром Zacapa Centenario XO</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span><strong>Armagnac Château de Laubade 1973</strong></span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-accent/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="text-6xl">🏛️</div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Атмосфера роскоши</h3>
                    <p className="text-muted-foreground">
                      Панорамная веранда с видом на вечерний город, кожаные кресла, живая джазовая музыка и приватная обстановка для деловых бесед
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <Icon name="Users" size={32} className="text-accent mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">До 30 гостей</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Armchair" size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">VIP-зона</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple-orange opacity-10"></div>
        
        <div className="container mx-auto max-w-2xl relative z-10">
          <h2 className="text-5xl font-bold text-center mb-6 gradient-text">
            Забронировать билет
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Количество мест ограничено. Не упустите возможность стать частью уникального гастрономического события!
          </p>
          
          <Card className="bg-card/90 backdrop-blur-sm border-primary/30">
            <CardContent className="p-8">
              <div className="mb-8 p-4 bg-primary/10 rounded-lg border border-primary/30 text-center">
                <p className="text-sm text-muted-foreground mb-2">Осталось мест</p>
                <p className="text-4xl font-bold gradient-text">{availableSeats} / {totalSeats}</p>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="bg-background/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input type="email" placeholder="ivan@example.com" className="bg-background/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" className="bg-background/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Количество билетов</label>
                  <Input type="number" min="1" max="10" defaultValue="1" className="bg-background/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Комментарий (необязательно)</label>
                  <Textarea placeholder="Особые пожелания или диетические ограничения" className="bg-background/50" />
                </div>
                
                <Button type="submit" size="lg" className="w-full gradient-purple-orange hover-scale text-lg">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Забронировать за 10 000 ₽
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Контакты</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <Icon name="MapPin" size={32} className="text-primary" />
              <h3 className="font-semibold text-lg">Место проведения</h3>
              <p className="text-muted-foreground">Банкетный зал &quot;Резиденция&quot;<br/>ул. Примерная, 123</p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <Icon name="Phone" size={32} className="text-secondary" />
              <h3 className="font-semibold text-lg">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <Icon name="Mail" size={32} className="text-accent" />
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-muted-foreground">info@gastrodinner.ru</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2026 Симфония Вкуса. Незабываемый гастрономический опыт.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;