let totalTimeLogged = 0;
let totalRecruitingTime = 0;
let totalEventsHosted = 0;

function addPlayer(button) {
    const playerName = prompt('Enter player name:');
    if (playerName) {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player';
        playerDiv.innerHTML = `
            <span>${playerName}</span>
            <div class="player-info">
                <div class="time-logged">0</div>
                <div class="events-attended">0</div>
                <div class="recruiting-time">0</div>
            </div>
            <button class="btn edit" onclick="editPlayer(this)">Edit</button>
            <button class="btn remove" onclick="removePlayer(this)">Remove</button>
        `;
        button.previousElementSibling.appendChild(playerDiv);
        saveToLocalStorage();
    }
}

function removePlayer(button) {
    if (confirm('Are you sure you want to remove this player?')) {
        const playerDiv = button.parentElement;
        playerDiv.remove();
        updateTotals();
        saveToLocalStorage();
    }
}

function editPlayer(button) {
    const playerDiv = button.parentElement;
    
    const currentTimeLogged = parseFloat(playerDiv.querySelector('.time-logged').textContent);
    const currentRecruitingTime = parseFloat(playerDiv.querySelector('.recruiting-time').textContent);

    const timeLoggedHours = parseInt(prompt('Enter hours to add/subtract to time logged:', 0));
    const timeLoggedMinutes = parseInt(prompt('Enter minutes to add/subtract to time logged:', 0));
    const recruitingTimeHours = parseInt(prompt('Enter hours to add/subtract to recruiting time:', 0));
    const recruitingTimeMinutes = parseInt(prompt('Enter minutes to add/subtract to recruiting time:', 0));

    const newTimeLogged = currentTimeLogged + timeLoggedHours + (timeLoggedMinutes / 60);
    const newRecruitingTime = currentRecruitingTime + recruitingTimeHours + (recruitingTimeMinutes / 60);

    playerDiv.querySelector('.time-logged').textContent = newTimeLogged.toFixed(2);
    playerDiv.querySelector('.recruiting-time').textContent = newRecruitingTime.toFixed(2);

    updateTotals();
    saveToLocalStorage();
}

function addEvent() {
    totalEventsHosted += 1;
    updateTotals();
}
function removeEvent() {
    totalEventsHosted -= 1;
    updateTotals();
}

function updateTotals() {
    totalTimeLogged = 0;
    totalRecruitingTime = 0;

    document.querySelectorAll('.player').forEach(playerDiv => {
        totalTimeLogged += parseFloat(playerDiv.querySelector('.time-logged').textContent);
        totalRecruitingTime += parseFloat(playerDiv.querySelector('.recruiting-time').textContent);
    });

    document.getElementById('total-time-logged').textContent = totalTimeLogged.toFixed(2);
    document.getElementById('total-recruiting-time').textContent = totalRecruitingTime.toFixed(2);
    document.getElementById('total-events-hosted').textContent = totalEventsHosted.toFixed(2);
}

function resetQuotas() {
    document.querySelectorAll('.player').forEach(playerDiv => {
        playerDiv.querySelector('.time-logged').textContent = '0';
        playerDiv.querySelector('.events-attended').textContent = '0';
        playerDiv.querySelector('.recruiting-time').textContent = '0';
    });

    totalEventsHosted = 0;

    updateTotals();
    saveToLocalStorage();
}

function saveToLocalStorage() {
    const data = {
        players: [],
        totalTimeLogged,
        totalRecruitingTime,
        totalEventsHosted
    };

    document.querySelectorAll('.player').forEach(playerDiv => {
        const player = {
            name: playerDiv.querySelector('span').textContent,
            timeLogged: playerDiv.querySelector('.time-logged').textContent,
            eventsAttended: playerDiv.querySelector('.events-attended').textContent,
            recruitingTime: playerDiv.querySelector('.recruiting-time').textContent
        };
        data.players.push(player);
    });

    localStorage.setItem('quotaTrackerData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('quotaTrackerData'));
    if (data) {
        data.players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.innerHTML = `
                <span>${player.name}</span>
                <div class="player-info">
                    <div class="time-logged">${player.timeLogged}</div>
                    <div class="events-attended">${player.eventsAttended}</div>
                    <div class="recruiting-time">${player.recruitingTime}</div>
                </div>
                <button class="btn edit" onclick="editPlayer(this)">Edit</button>
                <button class="btn remove" onclick="removePlayer(this)">Remove</button>
            `;
            document.querySelector('.players').appendChild(playerDiv);
        });

        totalTimeLogged = data.totalTimeLogged;
        totalRecruitingTime = data.totalRecruitingTime;
        totalEventsHosted = data.totalEventsHosted;
        updateTotals();
    }
}
