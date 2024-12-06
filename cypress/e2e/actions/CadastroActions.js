import CadastroPage from '../pages/CadastroPage.js';
import { faker } from '@faker-js/faker';

class CadastroActions {
  constructor() {
    this.cadastroPage = new CadastroPage();
  }

  visitCadastroPage() {
    this.cadastroPage.visit();
  }

  cadastroComFalha() {
    const name = faker.name.firstName();
    const password = faker.internet.password();

    // Intencionalmente fornece dados inválidos para falha
    this.cadastroPage.cadastro(name, password, password, 'differentPassword');
  }

  cadastroComSucesso() {
    const name = faker.name.firstName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    // Fornece dados válidos para sucesso
    this.cadastroPage.cadastro(name, email, password, password);
    
    // Retorna os dados gerados
    return { email, password };
  }
}

export default new CadastroActions();
