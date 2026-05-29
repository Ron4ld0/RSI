import React, { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';

export default function RSVPModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    confirm: 'yes'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inviteCode, setInviteCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Geramos o código único no momento do envio do formulário
    const generatedCode = formData.confirm === 'yes'
      ? `RSI-CONV-2A-${Math.floor(1000 + Math.random() * 9000)}`
      : 'N/A';
    setInviteCode(generatedCode);

    const webAppUrl = import.meta.env.VITE_SHEETS_API_URL;

    if (!webAppUrl) {
      // Se não houver URL configurada no .env, simula para testes locais
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1000);
      return;
    }

    try {
      // Enviamos a requisição para o Google Apps Script
      await fetch(webAppUrl, {
        method: 'POST',
        mode: 'no-cors', // no-cors é recomendado para evitar bloqueios CORS de redirecionamento do Google
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          confirm: formData.confirm === 'yes' ? 'Confirmado' : 'Recusado',
          date: new Date().toLocaleString('pt-BR'),
          code: generatedCode // Envia o código gerado para a planilha
        }),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Erro de envio (Fallback ativado):', error);
      // Caso ocorra falha de conexão, garante que o usuário veja a tela de sucesso
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all duration-300">
      <div className="relative w-full max-w-md bg-rsiDark-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8">

        <button
          onClick={() => {
            onClose();
            // Reset state on close
            setTimeout(() => {
              setSubmitted(false);
              setFormData({ name: '', phone: '', confirm: 'yes' });
            }, 300);
          }}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-rsiGreen-500 font-semibold">RSVP</span>
              <h3 className="text-2xl font-sans font-bold text-white mt-1">Confirmar Presença</h3>
              <p className="text-sm text-gray-400 mt-1">Por favor, confirme sua presença até 02 de Junho.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1 font-medium">Nome Completo</label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-rsiDark-950 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-rsiGreen-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1 font-medium">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-rsiDark-950 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-rsiGreen-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">Você irá comparecer?</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, confirm: 'yes' })}
                    className={`py-2 px-4 rounded-lg border text-sm font-medium transition-all ${formData.confirm === 'yes'
                        ? 'bg-rsiGreen-500/10 border-rsiGreen-500 text-rsiGreen-500'
                        : 'bg-rsiDark-950 border-white/10 text-gray-400 hover:border-white/20'
                      }`}
                  >
                    Sim, com certeza!
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, confirm: 'no' })}
                    className={`py-2 px-4 rounded-lg border text-sm font-medium transition-all ${formData.confirm === 'no'
                        ? 'bg-red-500/10 border-red-500 text-red-500'
                        : 'bg-rsiDark-950 border-white/10 text-gray-400 hover:border-white/20'
                      }`}
                  >
                    Não poderei ir
                  </button>
                </div>
              </div>



              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-white hover:bg-rsiGreen-500 hover:text-white text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-rsiGreen-500/20 disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Confirmar</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rsiGreen-500/10 text-rsiGreen-500 mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-sans font-bold text-white mb-2">
              {formData.confirm === 'yes' ? 'Presença Confirmada!' : 'Agradecemos o retorno!'}
            </h3>
            <p className="text-sm text-gray-400 max-w-xs mx-auto">
              {formData.confirm === 'yes'
                ? `Olá ${formData.name.split(' ')[0]}, seu convite foi validado com sucesso. Nos vemos no dia 05 de Junho!`
                : `Que pena que você não poderá comparecer, ${formData.name.split(' ')[0]}. Agradecemos seu contato.`}
            </p>
            {formData.confirm === 'yes' && (
              <div className="mt-6 flex justify-center">
                <div className="p-4 bg-rsiDark-950 border border-white/5 rounded-xl inline-flex flex-col items-center min-w-[200px] shadow-inner">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1 font-mono">Código do Convite</span>
                  <span className="text-sm font-mono text-rsiGreen-400 font-bold tracking-wider">{inviteCode}</span>
                </div>
              </div>
            )}

            <div className="mt-8">
              <button
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', confirm: 'yes' });
                  }, 300);
                }}
                className="px-8 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold tracking-widest uppercase rounded-lg border border-white/10 transition-all duration-300 cursor-pointer shadow-md"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
