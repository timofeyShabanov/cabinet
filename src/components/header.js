export const header = () => `
<div class="header">
									<div class="box search-container">
											<input id="search-input" type="text" placeholder="Пошук" />
											<button onclick="console.log(document.getElementById('search-input').value); document.getElementById('search-input').value = '';">
  <img class="icon" src="images/icons/search.svg" alt="search" />
</button>

									</div>
									<div class="box bell-container">
											<img class='icon' src="images/icons/bell.svg" alt="bell"/>
									</div>
									<div class="profile-card box">
											<img class="check-mark-icon" src="images/icons/checkMark.svg" alt="checkMark"  />
											<span class="user-info">Іван Іванович</span>
											<img src="#" class="avatar" alt="avatar"/>
									</div>
							</div>	
`;
