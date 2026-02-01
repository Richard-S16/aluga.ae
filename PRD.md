# PRD - Aluga.ae

## 1. Visão Geral do Produto

**Nome do Produto:** Aluga.ae

**Tagline:** "Alugue o que você precisa, quando precisar"

**Descrição:** Plataforma peer-to-peer (P2P) que conecta pessoas que possuem itens pouco utilizados com pessoas que precisam alugá-los temporariamente. O foco inicial é em ferramentas e equipamentos, seguindo o modelo de negócio do Turo (aluguel de carros P2P) aplicado a bens diversos.

---

## 2. Problema

### 2.1 Problema do Locador (Proprietário)
- Ferramentas e equipamentos custosos ficam parados 90% do tempo
- Dinheiro investido sem retorno
- Falta de espaço para armazenamento de itens pouco usados
- Depreciação de ativos sem utilização

### 2.2 Problema do Locatário (Pessoa que aluga)
- Necessidade pontual de ferramentas específicas
- Custo alto de aquisição para uso único ou esporádico
- Falta de espaço para armazenar ferramentas que raramente usa
- Dificuldade em encontrar opções de aluguel pessoa física confiáveis

---

## 3. Solução

Uma plataforma mobile-first que permite:
- **Para Locadores:** Cadastrar itens, definir preços e disponibilidade, e monetizar bens parados
- **Para Locatários:** Buscar, reservar e alugar ferramentas de pessoas próximas por período flexível
- **Para Ambos:** Sistema de avaliação mútua, seguro opcional, pagamento integrado e comunicação segura

---

## 4. Objetivos do Produto

### 4.1 Objetivos de Negócio
- Validar o modelo de negócio P2P de aluguel de ferramentas em 6 meses
- Alcançar 1.000 usuários ativos no primeiro ano
- Processar R$ 50.000 em transações no primeiro ano
- Taxa de retenção de 40% (usuários que voltam a usar)

### 4.2 Objetivos do Usuário
- Permitir que locadores ganhem dinheiro extra com itens parados
- Economizar até 80% do custo de compra para locatários
- Conectar vizinhos e fomentar economia compartilhada local

---

## 5. Público-Alvo

### 5.1 Persona: Locador - "Paulo, o Faz-Tudo"
- **Idade:** 35-55 anos
- **Perfil:** Proprietário de casa, gosta de fazer pequenos reparos
- **Comportamento:** Tem furadeira, serra, lixadeira, escada, etc., mas usa poucas vezes por ano
- **Motivação:** Recuperar parte do investimento e liberar espaço
- **Dor:** Sente que gastou muito em ferramentas que mal usa

### 5.2 Persona: Locatário - "Mariana, a Inquilina"
- **Idade:** 25-40 anos
- **Perfil:** Mora em apartamento alugado, precisa de ferramentas esporadicamente
- **Comportamento:** Faz pequenos reparos e projetos DIY ocasionalmente
- **Motivação:** Economizar dinheiro e não acumular coisas
- **Dor:** Não quer comprar uma furadeira cara para usar uma vez

### 5.3 Segmento Inicial
- Moradores de centros urbanos (São Paulo, Rio, Belo Horizonte)
- Classe média e média-alta
- Familiarizados com apps de economia compartilhada

---

## 6. Categorias de Produtos (MVP - Fase 1)

### Foco Inicial: Ferramentas e Equipamentos

#### 6.1 Ferramentas Elétricas
- Furadeiras e parafusadeiras
- Serras (circular, tico-tico, mármore)
- Lixadeiras
- Esmerilhadeiras
- Politriz
- Compressores de ar
- Pistolas de pintura

#### 6.2 Ferramentas Manuais e Equipamentos
- Escadas
- Andaimes
- Carrinhos de carga
- Kits de ferramentas completos
- Ferramentas especializadas (torquímetro, etc.)

#### 6.3 Equipamentos para Casa e Jardim
- Lavadora de alta pressão
- Aspiradores industriais
- Cortadores de grama
- Motosserras
- Roçadeiras

---

## 7. Funcionalidades Principais

### 7.1 MVP (Versão 1.0)

#### Para Locadores:
1. **Cadastro e Autenticação**
   - Registro via email, Google ou Apple
   - Verificação de identidade (documento com foto)
   - Verificação de telefone via SMS

2. **Gestão de Anúncios**
   - Cadastrar item (fotos, descrição, categoria)
   - Definir preço por dia/semana
   - Definir calendário de disponibilidade
   - Adicionar regras de uso e cuidados
   - Definir raio de entrega/retirada

3. **Gestão de Aluguéis**
   - Aceitar/recusar solicitações
   - Comunicação via chat integrado
   - Confirmar entrega e devolução
   - Avaliar locatário

#### Para Locatários:
1. **Busca e Descoberta**
   - Busca por categoria e localização
   - Filtros (preço, distância, avaliação)
   - Visualizar perfil do locador e avaliações
   - Visualizar disponibilidade em calendário

2. **Processo de Aluguel**
   - Solicitar aluguel com datas
   - Chat com locador
   - Pagamento integrado (PIX, cartão)
   - Receber confirmação e detalhes de retirada
   - Avaliar item e locador

#### Para Ambos:
1. **Perfil do Usuário**
   - Foto, nome, verificações
   - Histórico de aluguéis
   - Avaliações recebidas
   - Itens cadastrados (locador)

2. **Sistema de Avaliações**
   - Avaliação de 1-5 estrelas
   - Comentários escritos
   - Avaliação mútua (após devolução)

3. **Segurança e Confiança**
   - Verificação de identidade
   - Sistema de denúncia
   - Termos de uso e políticas claras

---

## 8. Requisitos Funcionais Detalhados

### 8.1 Sistema de Cadastro de Itens
- **RF001:** O sistema deve permitir upload de até 8 fotos por item
- **RF002:** O sistema deve ter campos obrigatórios: título, categoria, preço diário, descrição
- **RF003:** O sistema deve permitir definir preços diferentes para diária, semanal e mensal
- **RF004:** O sistema deve permitir marcar dias indisponíveis no calendário
- **RF005:** O sistema deve permitir pausar anúncio temporariamente

### 8.2 Sistema de Busca
- **RF006:** A busca deve filtrar por localização (raio em km)
- **RF007:** A busca deve filtrar por categoria
- **RF008:** A busca deve filtrar por faixa de preço
- **RF009:** A busca deve ordenar por: relevância, preço, distância, avaliação
- **RF010:** Deve exibir itens disponíveis nas datas selecionadas

### 8.3 Sistema de Reserva
- **RF011:** O locatário deve selecionar data de retirada e devolução
- **RF012:** O sistema deve calcular valor total automaticamente
- **RF013:** O sistema deve incluir taxa de serviço (% sobre o valor)
- **RF014:** A reserva fica pendente até aprovação do locador (até 24h)
- **RF015:** Pagamento só é processado após aprovação

### 8.4 Sistema de Pagamento
- **RF016:** Integração com gateway de pagamento (Stripe/Mercado Pago)
- **RF017:** Aceitar PIX, cartão de crédito e débito
- **RF018:** Valor fica retido até confirmação de retirada
- **RF019:** Liberação de pagamento para locador após devolução confirmada
- **RF020:** Taxa de serviço: 15% (10% locador + 5% locatário)

### 8.5 Sistema de Comunicação
- **RF021:** Chat em tempo real entre locador e locatário
- **RF022:** Notificações push para mensagens
- **RF023:** Possibilidade de enviar fotos no chat
- **RF024:** Histórico de conversas salvo

### 8.6 Sistema de Avaliações
- **RF025:** Avaliação de 1-5 estrelas com comentário
- **RF026:** Avaliação só é possível após conclusão do aluguel
- **RF027:** Ambas as partes devem avaliar (prazo de 7 dias)
- **RF028:** Avaliações são públicas e aparecem no perfil
- **RF029:** Média de avaliações calculada automaticamente

---

## 9. Requisitos Não-Funcionais

### 9.1 Performance
- **RNF001:** Tempo de carregamento de página < 2 segundos
- **RNF002:** Busca deve retornar resultados em < 1 segundo
- **RNF003:** Upload de fotos deve ter feedback de progresso

### 9.2 Segurança
- **RNF004:** Dados sensíveis criptografados (TLS 1.3)
- **RNF005:** Senhas hasheadas com bcrypt
- **RNF006:** Conformidade com LGPD
- **RNF007:** Logs de auditoria para transações financeiras

### 9.3 Usabilidade
- **RNF008:** Interface responsiva (mobile-first)
- **RNF009:** Suporte para iOS e Android
- **RNF010:** Acessibilidade WCAG 2.1 nível AA

### 9.4 Escalabilidade
- **RNF011:** Arquitetura deve suportar 10.000 usuários simultâneos
- **RNF012:** Banco de dados deve suportar 100.000 itens cadastrados

### 9.5 Disponibilidade
- **RNF013:** SLA de 99.5% de uptime
- **RNF014:** Backup diário de dados

---

## 10. Jornada do Usuário

### 10.1 Jornada do Locador (Primeira Vez)
1. Descobre o app (indicação/marketing)
2. Baixa e faz cadastro
3. Verifica identidade
4. Cadastra primeira ferramenta (furadeira)
5. Define preço com base em sugestões
6. Aguarda primeira solicitação
7. Recebe solicitação e aprova
8. Combina retirada via chat
9. Entrega item e confirma no app
10. Recebe item de volta
11. Confirma devolução e avalia locatário
12. Recebe pagamento

### 10.2 Jornada do Locatário (Primeira Vez)
1. Precisa de uma furadeira para o fim de semana
2. Descobre o app (busca no Google/app store)
3. Baixa e faz cadastro
4. Busca "furadeira" próxima
5. Vê opções e filtra por preço/distância
6. Seleciona item, vê perfil e avaliações
7. Solicita aluguel para sábado e domingo
8. Aguarda aprovação
9. Recebe aprovação e efetua pagamento
10. Combina retirada via chat
11. Retira item e confirma no app
12. Usa a ferramenta
13. Devolve item e confirma no app
14. Avalia locador e item

---

## 11. Casos de Uso Críticos

### 11.1 Caso de Uso: Item Danificado
- **Cenário:** Locatário devolve item com dano
- **Fluxo:**
  1. Locador identifica dano na devolução
  2. Locador reporta problema no app (com fotos)
  3. Locador e locatário tentam acordo
  4. Se não houver acordo, equipe Aluga.ae intervém
  5. Avaliação de responsabilidade
  6. Cobrança adicional ou reembolso

### 11.2 Caso de Uso: Item Não Devolvido
- **Cenário:** Locatário não devolve item no prazo
- **Fluxo:**
  1. Sistema notifica locatário 1 dia antes do prazo
  2. Sistema notifica locatário no dia do prazo
  3. Se passar do prazo, cobrança automática de multa diária
  4. Locador pode reportar não devolução
  5. Equipe Aluga.ae entra em contato
  6. Se necessário, acionamento de medidas legais

### 11.3 Caso de Uso: Cancelamento
- **Cenário:** Locatário cancela reserva
- **Fluxo:**
  1. Locatário solicita cancelamento
  2. Se > 48h antes: reembolso total
  3. Se 24-48h antes: reembolso de 50%
  4. Se < 24h antes: sem reembolso
  5. Locador é notificado

---

## 12. Modelo de Negócio

### 12.1 Fonte de Receita
- **Taxa de Serviço:** 15% sobre cada transação
  - 10% pago pelo locador
  - 5% pago pelo locatário
- **Exemplo:** Furadeira alugada por R$ 30/dia
  - Locatário paga: R$ 31,50
  - Locador recebe: R$ 27,00
  - Aluga.ae fica com: R$ 4,50

### 12.2 Receitas Futuras (Pós-MVP)
- Planos premium para locadores (destaque nos resultados)
- Seguro adicional para itens de alto valor
- Serviço de entrega/logística
- Publicidade de ferramentas/marcas

### 12.3 Estrutura de Custos
- Desenvolvimento e manutenção da plataforma
- Infraestrutura (cloud, servidores)
- Marketing e aquisição de usuários
- Suporte ao cliente
- Gateway de pagamento (taxas)
- Custos legais e compliance

---

## 13. Diferenciação e Vantagem Competitiva

### 13.1 Vs. Lojas de Aluguel Tradicionais
- ✅ Preços até 50% mais baixos
- ✅ Localização mais próxima
- ✅ Horários flexíveis
- ✅ Variedade maior de itens
- ❌ Pode ter menos garantia de qualidade

### 13.2 Vs. OLX/Marketplace de Venda
- ✅ Não precisa comprar (custo menor)
- ✅ Sistema de pagamento integrado e seguro
- ✅ Sistema de avaliação robusto
- ✅ Processo otimizado para aluguel

### 13.3 Vs. Concorrentes Diretos (se existirem)
- Foco em comunidade local
- UX simples e intuitiva
- Sistema de confiança robusto
- Mobile-first

---

## 14. Métricas de Sucesso (KPIs)

### 14.1 Métricas de Aquisição
- **CAC** (Custo de Aquisição por Cliente): < R$ 20
- Novos usuários por mês: 200+ (após 3 meses)
- Taxa de conversão de visitante para cadastro: 15%

### 14.2 Métricas de Ativação
- % de usuários que cadastram item (locador): 40%
- % de usuários que fazem primeira reserva (locatário): 30%
- Tempo médio até primeira transação: < 7 dias

### 14.3 Métricas de Retenção
- Taxa de retenção mensal: 40%
- Usuários ativos mensais (MAU): 500+ (6 meses)
- % de usuários que fazem 2+ aluguéis: 35%

### 14.4 Métricas de Receita
- GMV (Gross Merchandise Value) mensal: R$ 10.000+ (6 meses)
- Valor médio de transação: R$ 80
- Receita por usuário ativo: R$ 20

### 14.5 Métricas de Qualidade
- NPS (Net Promoter Score): > 50
- Avaliação média de itens: > 4.2 estrelas
- Taxa de conclusão de aluguel: > 95%
- Taxa de disputa: < 2%

---

## 15. Roadmap

### Fase 1: MVP (Meses 1-3)
**Objetivo:** Validar hipótese com produto mínimo viável

- ✅ Design de UX/UI
- ✅ Desenvolvimento Web (Next.js) e Mobile (Capacitor)
- ✅ Funcionalidades básicas de cadastro e busca
- ✅ Sistema de reserva e pagamento
- ✅ Chat integrado
- ✅ Sistema de avaliações
- ✅ Testes beta com 50 usuários
- ✅ Lançamento em 1 cidade (Indaiatuba, SP)

### Fase 2: Validação (Meses 4-6)
**Objetivo:** Validar product-market fit

- 📍 Marketing local (redes sociais, eventos)
- 📍 Onboarding de 500 usuários
- 📍 Coleta de feedback e iterações
- 📍 Implementação de melhorias de UX
- 📍 Sistema de notificações push
- 📍 Expansão para 2 novas cidades

### Fase 3: Crescimento (Meses 7-12)
**Objetivo:** Crescer base de usuários e GMV

- 🔮 Seguro opcional para itens
- 🔮 Programa de indicação (referral)
- 🔮 Expansão de categorias (equipamentos esportivos, festa)
- 🔮 Melhorias no algoritmo de busca
- 🔮 Planos premium para locadores
- 🔮 Expansão para 5+ cidades
- 🔮 Parcerias com marcas de ferramentas

### Fase 4: Escala (Ano 2)
**Objetivo:** Consolidar liderança e escalar

- 🔮 Serviço de entrega integrado
- 🔮 Verificação avançada de identidade
- 🔮 Sistema de depósito caução
- 🔮 Expansão nacional
- 🔮 API para integrações
- 🔮 Marketplace B2B (empresas alugando)

---

## 16. Riscos e Mitigação

### 16.1 Riscos de Produto
| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Baixa adoção inicial | Alta | Alto | Marketing agressivo, programa de indicação, cashback inicial |
| Problemas de confiança | Média | Alto | Sistema robusto de verificação e avaliações, seguro opcional |
| Itens danificados/roubados | Média | Alto | Políticas claras, sistema de depósito, seguro, termos de uso |
| Qualidade irregular dos itens | Alta | Médio | Sistema de avaliações, fotos obrigatórias, descrição detalhada |

### 16.2 Riscos de Negócio
| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Concorrência de players grandes | Média | Alto | Foco em nicho, execução rápida, comunidade forte |
| Regulação/legislação | Baixa | Alto | Assessoria jurídica, conformidade desde o início |
| Problemas de pagamento | Baixa | Médio | Gateway confiável, suporte ativo |
| Custos de operação altos | Média | Médio | Automação, processos eficientes, escala |

### 16.3 Riscos Técnicos
| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Bugs críticos | Média | Alto | Testes rigorosos, beta testing, monitoramento |
| Problemas de performance | Baixa | Médio | Arquitetura escalável, testes de carga |
| Segurança/vazamento de dados | Baixa | Muito Alto | Auditoria de segurança, criptografia, compliance LGPD |

---

## 17. Requisitos Técnicos

### 17.1 Stack Tecnológica Sugerida

**Frontend:**
- Next.js (React) para web app responsivo
- Tailwind CSS para estilização

**Mobile:**
- Capacitor

**Backend:**
- Next.js Route Handlers
- PostgreSQL (banco de dados principal)
- Redis (cache e sessions)
- AWS S3 (armazenamento de imagens)

**Infraestrutura:**
- Vercel ou AWS (hosting)
- CloudFlare (CDN)
- Firebase Cloud Messaging (notificações push)

**Integrações:**
- Stripe ou Mercado Pago (pagamentos)
- Twilio (SMS verificação)
- Google Maps API (geolocalização)
- SendGrid (emails transacionais)

### 17.2 Arquitetura
- Arquitetura RESTful API
- Autenticação JWT
- Upload de imagens otimizado e compressão
- Websockets para chat em tempo real

---

## 18. Critérios de Aceitação do MVP

### Para Lançamento, o App DEVE:
- ✅ Permitir cadastro e login de usuários
- ✅ Verificar identidade (documento + telefone)
- ✅ Permitir cadastro de itens com fotos
- ✅ Permitir busca por categoria e localização
- ✅ Permitir solicitar e aprovar aluguéis
- ✅ Processar pagamentos com segurança
- ✅ Ter chat funcional entre usuários
- ✅ Permitir avaliação mútua
- ✅ Ter termos de uso e políticas de privacidade
- ✅ Funcionar em iOS e Android
- ✅ Ter taxa de crash < 1%
- ✅ Ter suporte ao cliente básico

---

## 19. Questões em Aberto

1. **Seguro:** Devemos incluir seguro obrigatório no MVP ou torná-lo opcional?
2. **Entrega:** Devemos incluir logística de entrega ou deixar por conta dos usuários?
3. **Depósito Caução:** É necessário sistema de depósito caução desde o MVP?
4. **Verificação:** Que nível de verificação é suficiente para lançamento?
5. **Categorias:** Devemos começar APENAS com ferramentas ou abrir para outras categorias desde o início?
6. **Precificação:** Como sugerir preços para locadores? Usar ML?
7. **Modelo de Taxa:** 15% é competitivo? Testar modelos alternativos?

---

## 20. Próximos Passos

### Imediatos (Semana 1-2)
1. ✅ Criar PRD detalhado
2. 🔲 Validar PRD com stakeholders
3. 🔲 Pesquisa de mercado e concorrência
4. 🔲 Entrevistas com usuários potenciais (10-15 pessoas)
5. 🔲 Definir stack técnico final

### Curto Prazo (Mês 1)
1. 🔲 Design de wireframes e protótipo
2. 🔲 Validação do protótipo com usuários
3. 🔲 Setup inicial do projeto (repositório, infra)
4. 🔲 Início do desenvolvimento do MVP

### Médio Prazo (Mês 2-3)
1. 🔲 Desenvolvimento completo do MVP
2. 🔲 Testes de qualidade e segurança
3. 🔲 Beta testing com grupo fechado
4. 🔲 Preparação para lançamento (landing page, materiais de marketing)
5. 🔲 Lançamento soft em São Paulo

---

## 21. Apêndices

### A. Glossário
- **Locador:** Pessoa que aluga seu item para outra pessoa
- **Locatário:** Pessoa que aluga item de outra pessoa
- **P2P:** Peer-to-peer, transação entre pessoas físicas
- **GMV:** Gross Merchandise Value, valor bruto de mercadorias transacionadas
- **CAC:** Customer Acquisition Cost, custo para adquirir um cliente
- **NPS:** Net Promoter Score, métrica de satisfação do cliente

### B. Referências
- Modelo de negócio: Turo, Airbnb, Rent the Runway
- Concorrentes potenciais: OLX, Enjoei, GetNinjas
- Benchmarks de marketplace: Mercado Livre, Etsy

### C. Contatos da Equipe
- Product Owner: [Nome]
- Tech Lead: [Nome]
- Designer: [Nome]

---

**Documento criado em:** 01/02/2026  
**Versão:** 1.0  
**Status:** Draft para revisão  
**Próxima revisão:** [Data]
