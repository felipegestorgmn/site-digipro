# Guia de Deploy — DigiPro na sua VPS

## Pacotes disponíveis

| Arquivo | Conteúdo | Uso |
|---------|----------|-----|
| `digipro-frontend-build.tar.gz` | Site estático pronto | **Recomendado** — só descompactar e servir |
| `digipro-frontend-source.tar.gz` | Código-fonte React | Para editar e reconstruir |

---

## Opção 1: Servir o build estático (mais simples)

```bash
# 1. Baixar e extrair
tar xzf digipro-frontend-build.tar.gz
sudo mv build /var/www/digipro

# 2. Nginx
sudo tee /etc/nginx/sites-available/digipro << 'EOF'
server {
    listen 80;
    server_name seudominio.com.br www.seudominio.com.br;
    root /var/www/digipro;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/digipro /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 3. HTTPS com Certbot
sudo certbot --nginx -d seudominio.com.br -d www.seudominio.com.br
```

---

## Opção 2: Reconstruir a partir do código-fonte

```bash
# 1. Extrair
tar xzf digipro-frontend-source.tar.gz
cd frontend

# 2. Instalar dependências
yarn install        # ou: npm install

# 3. Gerar build de produção
yarn build          # ou: npm run build

# 4. Servir a pasta 'build' como na Opção 1
```

---

## Variáveis de ambiente necessárias

Crie o arquivo `frontend/.env` **antes** de rodar `yarn build`:

```env
REACT_APP_BACKEND_URL=https://seudominio.com.br
```

> **Nota:** A homepage DigiPro atual **não usa backend**. O valor acima é apenas para evitar erros de build. Você pode deixar qualquer URL válida.

---

## SEO — Completar após o deploy

Quando o site estiver no ar com domínio próprio, edite `frontend/public/index.html` e adicione **antes** do build:

```html
<link rel="canonical" href="https://seudominio.com.br/" />
<meta property="og:url" content="https://seudominio.com.br/" />
<meta property="og:image" content="https://seudominio.com.br/og-image.png" />
<meta name="twitter:image" content="https://seudominio.com.br/og-image.png" />
```

E crie `frontend/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://seudominio.com.br/</loc></url>
</urlset>
```

Depois rode `yarn build` novamente.

---

## Checklist pós-deploy

- [ ] Site abre em `https://seudominio.com.br`
- [ ] `https://seudominio.com.br/robots.txt` retorna o arquivo
- [ ] `https://seudominio.com.br/llms.txt` retorna o arquivo
- [ ] Favicon aparece na aba do navegador
- [ ] Todos os links do WhatsApp funcionam
- [ ] Menu mobile abre e fecha
- [ ] Enviar sitemap no Google Search Console
