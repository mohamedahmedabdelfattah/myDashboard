(function()
{
	if(document.getElementsByName("custom_field_21")[0] == "[object HTMLSelectElement]")
	{
		userinput = window.prompt("Enter your Orders or Matrix exchange name, Don`t write it down it`s CASE SENSITIVE","DON`T WRITE HERE, COPY FROM MATRIX OR ORDERS");
		
		if (userinput != null)
		{
			input = userinput.trim();
			list = document.getElementsByName("custom_field_21")[0];
			x = list.options.length;
			
			for(i=0;i<x;i++)
			{
				z = list.options[i].value.trim();
				if(z == input)
				{
					list.value = list.options[i].value;
					document.getElementsByName("custom_field_1")[0].value = "";
					break;
				}
			}
			
			if(z != input)
			{
				acc = document.getElementsByName("custom_field_37")[0];
				
				if(acc == "[object HTMLInputElement]" && document.getElementsByName("custom_field_37")[0].value == "")
					alert("Please go back and write account number first");
				else
				{
					if(acc == "[object HTMLInputElement]")
						accnum =  " - Acc#" + document.getElementsByName("custom_field_37")[0].value;
					else
						accnum = "";
					
					num = document.getElementsByName("custom_field_20")[0];
					
					if(num == "[object HTMLInputElement]" && document.getElementsByName("custom_field_20")[0].value == "")
						alert("Please go back and write ADSL phone number first");
					else
					{
						num =  " - Phone " + document.getElementsByName("custom_field_236")[0].value + document.getElementsByName("custom_field_20")[0].value;
						
						if(acc != "[object HTMLInputElement]")
							dest = num;
						else
							dest = accnum;
						
						list.value = "Mohandseen";
						alert("Exchange Not Found, added as a Comment and an E-Mail will open to be sent as per KMP General Info section #14");
						document.getElementsByName("custom_field_1")[0].value = 'Exchange: '+input;
						ebody = "Dear all, " +escape("\n\n")+"Kindly note that the below exchange not found on agento."+escape("\n\n")+"Exchange: "+ input +escape("\n\n\n\n\n\n");
						window.location.href = "mailto:sales-ccfollowup@tedata.net?cc=cc-sales@tedata.net;salesgroup@tedata.net&subject=Exchange Not Found"+ dest + "&body="+ebody;		
					}
				}
			}
		}
		else
		{
			if(userinput != null)
				alert("No ADSL Exchange on this ticket.");
		}
	}
	else
	{
		alert("AgentoExchange can only be used in Agento tickets that contain ADSL Exchange choice");
	}
}
)();