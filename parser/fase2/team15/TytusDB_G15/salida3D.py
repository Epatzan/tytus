from FuncionInter import * 
from goto import with_goto

inter = Intermedio()

@with_goto  # Decorador necesario.
def main():
	Sra = -1
	Ss0 = [0] * 10000

	print(inter.procesar_funcion0())
	print(inter.procesar_funcion1())	
	ta0 = 'INICIO CALIFICACION FASE 2'	
	Sra = Sra + 1	
	Ss0[Sra] = 1	
	goto. myFuncion	
	label. retorno1
	print(inter.procesar_funcion2())
	print(inter.procesar_funcion3())
	print(inter.Reportes())	
	goto. end	
	
	label. myFuncion	
	print(ta0 )	
	goto. retorno	
	
	label. retorno	
	Ssp = Ss0[Sra]	
	Sra = Sra - 1	
	if Ssp == 1: goto. retorno1

	label .end
	return

main()
