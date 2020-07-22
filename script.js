var data = [
{   
    id:'0',
    name: "John Smith",
    icon:'maps-and-flags.png',
    maps:"Rivieria State 32/106",
    network:"Twitter, Inc.",
    adress : "795 Folsom Ave, Suite 600",
    city: "San Francisco, CA 94107",
    phone: "P:(123) 456-7890",
    position:"Graphics designer",
    picture: "john-smith.jpg"
},
{
    id:'1',
    name: "Alex Jonathan",
    icon:'maps-and-flags.png',
    maps:"Rivieria State 32/106",
    network:"Twitter, Inc.",
    adress : "795 Folsom Ave, Suite 600",
    city: "San Francisco, CA 94107",
    phone: "P:(123) 456-7890",
    position:"CEO",
    picture: "alex-jonathan.jpg"
},
{
    id:'2',
    name: "Monica Smith",
    icon:'maps-and-flags.png',
    maps:"Rivieria State 32/106",
    network:"Twitter, Inc.",
    adress : "795 Folsom Ave, Suite 600",
    city: "San Francisco, CA 94107",
    phone: "P:(123) 456-7890",
    position:"Graphics designer",
    picture: "monica-smith.jpg"
},
{
    id:'3',
    name: "Michael Zimber",
    icon:'maps-and-flags.png',
    maps:"Rivieria State 32/106",
    network:"Twitter, Inc.",
    adress : "795 Folsom Ave, Suite 600",
    city: "San Francisco, CA 94107",
    phone: "P:(123) 456-7890",
    position:"Graphics designer",
    picture: "michael-zimber.jpg"
},
{
    id:'4',
    name: "Sandra Smith",
    icon:'maps-and-flags.png',
    maps:"Rivieria State 32/106",
    network:"Twitter, Inc.",
    adress : "795 Folsom Ave, Suite 600",
    city: "San Francisco, CA 94107",
    phone: "P:(123) 456-7890",
    position:"Graphics designer",
    picture: "sandra-smith.jpg"
},
{
    id:'5',
    name: "Janeth Carton",
    icon:'maps-and-flags.png',
    maps:"Rivieria State 32/106",
    network:"Twitter, Inc.",
    adress : "795 Folsom Ave, Suite 600",
    city: "San Francisco, CA 94107",
    phone: "P:(123) 456-7890",
    position:"Graphics designer",
    picture: "janeth-carton.jpg"
},
{
    id:'6',
    name: "Jony Jonathan",
    icon:'maps-and-flags.png',
    maps:"Rivieria State 32/106",
    network:"Twitter, Inc.",
    adress : "795 Folsom Ave, Suite 600",
    city: "San Francisco, CA 94107",
    phone: "P:(123) 456-7890",
    position:"CEO",
    picture: "alex-jonathan.jpg"
},
{
    id:'7',
    name: "Jim Smith",
    icon:'maps-and-flags.png',
    maps:"Rivieria State 32/106",
    network:"Twitter, Inc.",
    adress : "795 Folsom Ave, Suite 600",
    city: "San Francisco, CA 94107",
    phone: "P:(123) 456-7890",
    position:"Graphics designer",
    picture: "john-smith.jpg"
},
]

function get_all(){
    for(var i=0; i<data.length; i++){
        var name = data[i].name.replace(/\s/g, '');
        var html = 
            `
            <div class="container" id=`+name+`>
                <div class='left_side'>
                    <img class=`+'picture '+` id=`+'picture'+data[i].id+` src=`+data[i].picture+`>
                    <p class=`+'position'+` id=`+'position'+data[i].id+` >`+data[i].position+`</p>
                </div>
                <div class='right_side'>
                    <h3 class=`+'name '+` id=`+'name'+data[i].id+`>`+name+`</h3>
                    <div class=`+'location '+` id=`+'location'+data[i].id+`><img class='icon' src=`+data[i].icon+`><p class='maps'>`+data[i].maps+`</p></div>
                    <br>
                    <p class=`+'network '+` id=`+'network'+data[i].id+`>`+data[i].network+`</p>
                    <p class=`+'adress '+` id=`+'adress'+data[i].id+`>`+data[i].adress+`</p>
                    <p class=`+'city '+` id=`+'city'+data[i].id+`>`+data[i].city+`</p>
                    <p class=`+'phone '+` id=`+'phone'+data[i].id+`>`+data[i].phone+`</p>
                </div>
                <div class="modify_delete">
                    <button class=`+'edit'+data[i].id+` name=`+name+`><img class="edit" src="edit.png"></buttton>
                    <button class='delete' name=`+name+`><img class="edit" src="trash.png"></button>
                </div>
                <button class=`+'click'+data[i].id+` hidden>Edit</button>
            </div>
            
            `
        $('.big_container').append(html);  
    }
    var button_add = `<button class="add_contact"><img class='add' src="add.png"></button>`
    $('.big_container').append(button_add); 
}

get_all()



$('.delete').on('click', function(){
    let name_contact = $(this).attr('name');
    $('#'+name_contact).hide()
})

for(let i=0; i<data.length; i++){
    $('.edit'+data[i].id).on('click', function(){
        $('#name'+data[i].id).html("<input class='edit_name' placeholder='Type the name'></input>");
        $('#position'+data[i].id).html("<input class='edit_position' placeholder='Type the position'></input>");
        $('#location'+data[i].id).html("<input class='edit_location' placeholder='Type the location'></input>");
        $('#network'+data[i].id).html("<input class='edit_network' placeholder='Type the network'></input>");
        $('#adress'+data[i].id).html("<input class='edit_adress' placeholder='Type the adress'></input>");
        $('#city'+data[i].id).html("<input class='edit_city' placeholder='Type the city'></input>");
        $('#phone'+data[i].id).html("<input class='edit_phone' placeholder='Type the phone'></input>");
        $('.click'+data[i].id).css('height', '20px')
        $('.click'+data[i].id).removeAttr('hidden')
        })

    $('.click'+data[i].id).on('click', function(){
        alert('Modification réussi !!');
        $('#name'+data[i].id).text($('.edit_name').val());
        $('#position'+data[i].id).text($('.edit_position').val());
        $('#location'+data[i].id).text($('.edit_location').val())
        $('#network'+data[i].id).text($('.edit_network').val());
        $('#adress'+data[i].id).text($('.edit_adress').val())
        $('#city'+data[i].id).text($('.edit_city').val());
        $('#phone'+data[i].id).text($('.edit_phone').val());
        $('.click'+data[i].id).attr('hidden','')
        //console.log(data[i])
    })

}


$('.add_contact').on('click', function(){
    var contact = `
    <div class="container content_input">
        <div class="left_side">
            <input class='edit_img' placeholder='The link of your image'></input>
            <input class='edit_position' placeholder='Your position'></input>
        </div>
        <div class='right_side'>
            <input class='edit_name' placeholder='Your name'></input>
            <input class='edit_location' placeholder='Your location'></input>
            <input class='edit_network' placeholder='Your network'></input>
            <input class='edit_adress' placeholder='Your adress'></input
            <input class='edit_city' placeholder='Your city'></input>
            <input class='edit_phone' placeholder='Your phone'></input>
        </div>
        <button class='click'>Edit</button>
    </div>
    `
    $('.big_container').append(contact);
    $('.click').on('click', function(){
        for(var i=0; i<data.length; i++){
            var last_id = data[i].id
            last_id = parseInt(last_id);
            new_id = last_id+1
            var name = data[i].name.replace(/\s/g, '');
            $('#'+name).remove()
        }
        data.push(
            {   
                
                id: new_id.toString(),
                name:$('.edit_name').val(),
                icon:'maps-and-flags.png',
                maps:$('.edit_location').val(),
                network:$('.edit_network').val(),
                adress : $('.edit_adress').val(),
                city: $('.edit_city').val(),
                phone: $('.edit_phone').val(),
                position:$('.edit_position').val(),
                picture: $('.edit_img').val()
    
            }
        );
        $('.add_contact').remove()
        $('.content_input').remove()
        console.log(data)
        get_all()  
    })

})

