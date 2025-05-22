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
              <SelectItem value="Aracy">Aracy</SelectItem>
              <SelectItem value="Ana_Luiza">Ana Luiza</SelectItem>
              <SelectItem value="Tocantins">Tocantins</SelectItem>
              <SelectItem value="Joao_Ramalho">João Ramalho</SelectItem>
              <SelectItem value="Para">Para</SelectItem>
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
