"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "@/app/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"


import { collection, addDoc } from "firebase/firestore"
import { db } from "@/assets/fire"

export default function Form() {
  const [nome, setNome] = useState("")
  const [matricula, setMatricula] = useState("")
  const [escola, setEscola] = useState("")
  const [data, setData] = useState("")

  async function sendData(e) {
    e.preventDefault()

    if (!nome || !matricula || !escola || !data) {
      alert("Preencha todos os campos!")
      return
    }

    try {
      const docRef = await addDoc(collection(db, "digitais"), {
        nome,
        escola,
        matricula: Number(matricula),
        data, // data digitada pelo usuário
        dataEnvio: new Date().toISOString(), // data do envio no momento
      })
      console.log("Documento criado com ID:", docRef.id)

      // Resetar os campos
      setNome("")
      setMatricula("")
      setEscola("")
      setData("")
    } catch (e) {
      console.error("Erro ao adicionar documento:", e)
    }
  }

  // Função simples para forçar o formato dd/mm/yyyy
  function handleDataChange(e) {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2)
    if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5, 9)
    setData(value)
  }

  return (
    <form onSubmit={sendData} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label>Nome</Label>
        <Input value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Matrícula</Label>
        <Input
          type="number"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Escola</Label>
        <Select onValueChange={setEscola} value={escola}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecione uma escola" />
          </SelectTrigger>
          <SelectContent className="max-h-48 overflow-y-auto">
            <SelectGroup>
              <SelectLabel>Escolas</SelectLabel>
              <SelectItem value="Acre">Acre</SelectItem>
              <SelectItem value="Alagoas">Alagoas</SelectItem>
              <SelectItem value="Almerinda">Almerinda</SelectItem>
              <SelectItem value="Amapa">Amapa</SelectItem>
              <SelectItem value="Amazonas">Amazonas</SelectItem>
              <SelectItem value="Ana_Luiza">Ana Luiza</SelectItem>
              <SelectItem value="Anchieta">Anchieta</SelectItem>
              <SelectItem value="Bahia">Bahia</SelectItem>
              <SelectItem value="Ceara">Ceará</SelectItem>
              <SelectItem value="Celita">Celita</SelectItem>
              <SelectItem value="Cemead">Cemead</SelectItem>
              <SelectItem value="Conservatorio">Conservatório</SelectItem>
              <SelectItem value="Dom_Pedro_I">Dom Pedro I</SelectItem>
              <SelectItem value="Elza">Elza</SelectItem>
              <SelectItem value="Espirito_Santo">Espirito Santo</SelectItem>
              <SelectItem value="Fatima">Fátima</SelectItem>
              <SelectItem value="Goias">Goiás</SelectItem>
              <SelectItem value="Jayme">Jayme</SelectItem>
              <SelectItem value="Jardim_Casqueiro">Jardim Casqueiro</SelectItem>
              <SelectItem value="Joao_Ramalho">João Ramalho</SelectItem>
              <SelectItem value="Lorena">Lorena</SelectItem>
              <SelectItem value="Lucy">Lucy Montoro</SelectItem>
              <SelectItem value="Luiz_Gustavo">Luiz Gustavo</SelectItem>
              <SelectItem value="Luiza_Cortez">Luiza Cortez</SelectItem>
              <SelectItem value="Maranhao">Maranhão</SelectItem>
              <SelectItem value="Maria_Albertina">Maria Albertina</SelectItem>
              <SelectItem value="Maria_do_Rosario">Maria do Rosário</SelectItem>
              <SelectItem value="Maria_Liberata">Maria Liberata</SelectItem>
              <SelectItem value="Maria_Rosa">Maria Rosa</SelectItem>
              <SelectItem value="Mario_de_Oliveira">Mario de Oliveira</SelectItem>
              <SelectItem value="CEU_I">CEU I</SelectItem>
              <SelectItem value="CEU_II">CEU II</SelectItem>
              <SelectItem value="Marta_Magali">Marta Magali</SelectItem>
              <SelectItem value="Mato_Grosso">Mato Grosso</SelectItem>
              <SelectItem value="Minas_Gerais">Minas Gerais</SelectItem>
              <SelectItem value="Musicalização">Musicalização</SelectItem>
              <SelectItem value="Nobrega">Nobrega</SelectItem>
              <SelectItem value="Olivieri">Olivieri</SelectItem>
              <SelectItem value="Ortega">Ortega</SelectItem>
              <SelectItem value="Para">Pará</SelectItem>
              <SelectItem value="Pernambuco">Pernambuco</SelectItem>
              <SelectItem value="Pieruzzi">Pieruzzi</SelectItem>
              <SelectItem value="Princesa_Isabel">Princesa Isabel</SelectItem>
              <SelectItem value="Pucciariello">Pucciariello</SelectItem>
              <SelectItem value="Rio_Grande_do_Sul">Rio Grande do Sul</SelectItem>
              <SelectItem value="Rui_Barbosa">Rui Barbosa</SelectItem>
              <SelectItem value="Santa_Catarina">Santa Catarina</SelectItem>
              <SelectItem value="São_Paulo">São Paulo</SelectItem>
              <SelectItem value="São_Jose">São José</SelectItem>
              <SelectItem value="Sofia_Zarzur">Sofia Zarzur</SelectItem>
              <SelectItem value="Tocantins">Tocantins</SelectItem>
              <SelectItem value="Ulysses">Ulysses</SelectItem>
              <SelectItem value="Usina">Usina</SelectItem>
              <SelectItem value="Geraldo_Guedes_I">Geraldo Guedes I</SelectItem>
              <SelectItem value="Geraldo_Guedes_II">Geraldo Guedes II</SelectItem>
              <SelectItem value="Seduc">Seduc</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Data (dd/mm/yyyy)</Label>
        <Input
          value={data}
          onChange={handleDataChange}
          maxLength={10}
          placeholder="dd/mm/aaaa"
        />
      </div>

      <div className="flex flex-col">
        <Button type="submit" className="bg-black text-white">
          Cadastrar
        </Button>
      </div>
    </form>
  )
}
