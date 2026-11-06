
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const ocorrencias = [
  {
    id: 1,
    tipo: 'Iluminação pública',
    local: 'Avenida Paulista, 1000',
    status: 'Em análise'
  },
  {
    id: 2,
    tipo: 'Buraco na via',
    local: 'Rua Augusta, 500',
    status: 'Resolvido'
  }
];

app.get('/api/ocorrencias', (req, res) => {
  res.json(ocorrencias);
});

app.post('/api/ocorrencias', (req, res) => {
  const { tipo, local } = req.body;

  if (!tipo || !local) {
    return res.status(400).json({
      erro: 'Informe o tipo e o local da ocorrência'
    });
  }

  const nova = {
    id: ocorrencias.length + 1,
    tipo,
    local,
    status: 'Recebido'
  };

  ocorrencias.push(nova);
  res.status(201).json(nova);
});

app.listen(PORT, () => {
  console.log(`Alerta Cidadão rodando na porta ${PORT}`);
});
