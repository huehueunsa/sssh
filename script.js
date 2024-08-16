<script>
    let noCount = 0;

    document.getElementById('yesButton').addEventListener('click', function() {
        document.querySelector('h1').textContent = 'Thank you! OMG I hope we have the best safar!';
        document.querySelector('.confetti').style.display = 'block';
        document.querySelector('.flowers').style.display = 'block';
        document.querySelector('.confetti').classList.add('pop-out');
        document.querySelector('.flowers').classList.add('pop-out');
        document.getElementById('yesButton').style.display = 'none';
        document.getElementById('noButton').style.display = 'none';
        document.getElementById('followUpText').style.display = 'none';
        document.getElementById('fourthNoMessage').style.display = 'none'; // Hide the fourthNoMessage when Yes is pressed
    });

    document.getElementById('noButton').addEventListener('click', function() {
        noCount++;
        let followUpText = document.getElementById('followUpText');
        followUpText.classList.remove('hidden');
        followUpText.style.fontSize = '1.5rem';

        switch (noCount) {
            case 1:
                followUpText.textContent = "Here's flowers 💐, please say yes!";
                break;
            case 2:
                followUpText.textContent = "Here's food 🍔🍟, say yes please!";
                break;
            case 3:
                followUpText.textContent = "Pretty please, say yes! 🙏";
                break;
            case 4:
                followUpText.style.display = 'none';
                document.getElementById('fourthNoMessage').style.display = 'block';
                break;
        }
    });
</script>
