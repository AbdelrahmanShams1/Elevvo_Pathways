import { useEffect, useState, useCallback } from "react";
import {
  Search,
  MapPin,
  Wind,
  Droplets,
  Eye,
  Sun,
  Cloud,
  CloudRain,
  Snowflake,
  Zap,
} from "lucide-react";

const API_KEY = "b12e7f37516f73dc95add3dda0ebf265";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [units, setUnits] = useState("metric");

  // Auto-fetch user location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (err) => {
          console.warn("Geolocation error:", err);
          setError("Unable to get your location. Please search for a city.");
        }
      );
    }
  }, []);

  const fetchWeather = useCallback(
    async (cityName) => {
      if (!cityName.trim()) return;

      setLoading(true);
      setError(null);

      try {
        const [weatherRes, forecastRes] = await Promise.all([
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
              cityName
            )}&appid=${API_KEY}&units=${units}`
          ),
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
              cityName
            )}&appid=${API_KEY}&units=${units}`
          ),
        ]);

        if (!weatherRes.ok) {
          throw new Error(
            "City not found. Please check the spelling and try again."
          );
        }

        const [weatherData, forecastData] = await Promise.all([
          weatherRes.json(),
          forecastRes.json(),
        ]);

        setWeather(weatherData);
        setForecast(
          forecastData.list.filter((_, i) => i % 8 === 0).slice(0, 4)
        );
      } catch (err) {
        setError(
          err.message || "Failed to fetch weather data. Please try again."
        );
        setWeather(null);
        setForecast([]);
      } finally {
        setLoading(false);
      }
    },
    [units]
  );

  const fetchWeatherByCoords = useCallback(
    async (lat, lon) => {
      setLoading(true);
      setError(null);

      try {
        const [weatherRes, forecastRes] = await Promise.all([
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
          ),
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
          ),
        ]);

        const [weatherData, forecastData] = await Promise.all([
          weatherRes.json(),
          forecastRes.json(),
        ]);

        setWeather(weatherData);
        setForecast(
          forecastData.list.filter((_, i) => i % 8 === 0).slice(0, 4)
        );
      } catch (err) {
        setError("Failed to fetch weather data for your location.");
      } finally {
        setLoading(false);
      }
    },
    [units]
  );

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    fetchWeather(city);
  };

  const getUnitSymbol = () => (units === "metric" ? "°C" : "°F");

  const getWeatherIcon = (condition, isLarge = false) => {
    const size = isLarge ? "w-16 h-16" : "w-6 h-6";
    const iconMap = {
      clear: <Sun className={`${size} text-yellow-400`} />,
      clouds: <Cloud className={`${size} text-gray-400`} />,
      rain: <CloudRain className={`${size} text-blue-400`} />,
      snow: <Snowflake className={`${size} text-blue-200`} />,
      thunderstorm: <Zap className={`${size} text-purple-400`} />,
    };
    return iconMap[condition] || iconMap.clear;
  };

  return (
    <div className="min-h-screen h-full w-full bg-black fixed inset-0 overflow-auto">
      <div className="absolute inset-0 overflow-hidden bg-black">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-4 min-h-full">
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">
            WEATHER
          </h1>
          <p className="text-white/70 text-lg">Real-time weather information</p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a city..."
              className="w-full bg-white/20 backdrop-blur-xl text-white placeholder-white/60 px-6 py-4 pr-16 rounded-2xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all text-lg"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
            />
            <button
              onClick={handleSearch}
              disabled={loading || !city.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/40 p-3 rounded-xl transition-all disabled:opacity-50"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
            <p className="text-white/80 text-xl">Getting weather data...</p>
          </div>
        )}

        {error && (
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-red-500/20 backdrop-blur-xl border border-red-300/30 rounded-2xl p-6 text-center">
              <p className="text-white text-lg">{error}</p>
            </div>
          </div>
        )}

        {weather && !loading && (
          <div className="grid lg:grid-cols-3 gap-8 pb-8">
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-white/70" />
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {weather.name}
                      </h2>
                      <p className="text-white/70">{weather.sys.country}</p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setUnits(units === "metric" ? "imperial" : "metric")
                    }
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl text-white transition-all"
                  >
                    {units === "metric" ? "°F" : "°C"}
                  </button>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    {getWeatherIcon(
                      weather.weather[0].main.toLowerCase(),
                      true
                    )}
                    <span className="text-8xl md:text-9xl font-thin text-white ml-4">
                      {Math.round(weather.main.temp)}°
                    </span>
                  </div>
                  <p className="text-2xl text-white/90 capitalize mb-2">
                    {weather.weather[0].description}
                  </p>
                  <p className="text-white/70 text-lg">
                    Feels like {Math.round(weather.main.feels_like)}
                    {getUnitSymbol()}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4">
                    <Wind className="w-8 h-8 text-white/70 mx-auto mb-2" />
                    <p className="text-white/60 text-sm mb-1">Wind</p>
                    <p className="text-white font-semibold text-lg">
                      {weather.wind.speed} m/s
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <Droplets className="w-8 h-8 text-white/70 mx-auto mb-2" />
                    <p className="text-white/60 text-sm mb-1">Humidity</p>
                    <p className="text-white font-semibold text-lg">
                      {weather.main.humidity}%
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <Eye className="w-8 h-8 text-white/70 mx-auto mb-2" />
                    <p className="text-white/60 text-sm mb-1">Visibility</p>
                    <p className="text-white font-semibold text-lg">
                      {(weather.visibility / 1000).toFixed(1)} km
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white/70 font-bold">P</span>
                    </div>
                    <p className="text-white/60 text-sm mb-1">Pressure</p>
                    <p className="text-white font-semibold text-lg">
                      {weather.main.pressure} hPa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">
                4-Day Forecast
              </h3>
              {forecast.map((day, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {getWeatherIcon(day.weather[0].main.toLowerCase())}
                      <div>
                        <p className="text-white font-semibold text-lg">
                          {idx === 0
                            ? "Today"
                            : new Date(day.dt * 1000).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "short",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                        </p>
                        <p className="text-white/60 capitalize">
                          {day.weather[0].description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">
                        {Math.round(day.main.temp)}
                        {getUnitSymbol()}
                      </p>
                      <p className="text-white/60 text-sm">
                        {Math.round(day.main.temp_min)}° /{" "}
                        {Math.round(day.main.temp_max)}°
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!weather && !loading && !error && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-8">
              <Sun className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to Weather App
            </h2>
            <p className="text-white/70 text-xl mb-8">
              Search for a city to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
