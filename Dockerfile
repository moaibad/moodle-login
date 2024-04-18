# Gunakan node image dengan versi yang diinginkan
FROM node:14

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json (jika ada) ke dalam working directory
COPY package.json .
COPY package-lock.json .

# Install dependensi npm
RUN npm install

# Salin seluruh proyek ke dalam working directory di dalam container
COPY . .

# Expose port yang akan digunakan oleh aplikasi
EXPOSE 5173

# Perintah untuk menjalankan aplikasi ketika container dijalankan
CMD ["npm", "run", "dev"]
