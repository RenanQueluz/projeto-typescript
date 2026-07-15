import { server } from './server/server.js';
server.listen(process.env.PORT, () => {
    console.log(`app rodando na porta ${process.env.PORT || 3333}`);
});
//# sourceMappingURL=index.js.map